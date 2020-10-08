/* eslint-disable no-alert */
import React, {useEffect} from 'react';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '../../components/Repository';

import api from '../../services/api';
import getRealm from '../../services/realm';

import * as S from './styles';

function MainScreen() {
  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState(false);
  const [repositories, setRepositories] = React.useState([]);

  async function loadRepositories() {
    const realm = await getRealm();

    const data = realm.objects('Repository').sorted('stars', true);

    setRepositories(data);
  }

  useEffect(() => {
    loadRepositories();
  }, []);

  async function saveRepository(respository) {
    const {
      id,
      name,
      full_name: fullname,
      description,
      stargazers_count: stars,
      forks_count: forks,
    } = respository;

    const data = {id, name, fullname, description, stars, forks};

    const realm = await getRealm();

    realm.write(() => {
      /**
       * first param: schema name
       * second param: data
       * third param: update options
       */
      realm.create('Repository', data, 'modified');
    });

    return data;
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`repos/naeliofreires/${input}`);

      await saveRepository(response.data);

      setInput('');
      setError(false);

      alert('Repositorio inserido com sucesso!');

      Keyboard.dismiss();
    } catch (e) {
      setError(true);
    }
  }

  async function handleRefreshRepository(repository) {
    const response = await api.get(`/repos/${repository.fullname}`);

    const data = await saveRepository(response.data);

    setRepositories(
      repositories.map((repo) => (repo.id === data.id ? data : repo)),
    );
  }

  async function handleDeleteRepository(repository) {
    const realm = await getRealm();

    let hondas = realm.objects('Repository').filtered(`id = ${repository.id}`);

    realm.write(() => {
      realm.delete(hondas);
    });

    loadRepositories();
  }

  return (
    <S.Container>
      <S.Title>Repositorios</S.Title>

      <S.Form>
        <S.Input
          value={input}
          error={error}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Procurar repositório..."
          onChangeText={setInput}
        />

        <S.Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#000" />
        </S.Submit>
      </S.Form>

      <S.List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <Repository
            data={item}
            onRefresh={() => handleRefreshRepository(item)}
            onDelete={() => handleDeleteRepository(item)}
          />
        )}
      />
    </S.Container>
  );
}

export default MainScreen;
