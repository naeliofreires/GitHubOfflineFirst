import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

function Repository({data, onRefresh, onDelete}) {
  return (
    <S.Container>
      <S.Name>{data.name}</S.Name>
      <S.Description>{data.description}</S.Description>
      <S.Stats>
        <S.Stat>
          <Icon name="star" size={16} color="#333" />
          <S.StatCount>{data.stars}</S.StatCount>
        </S.Stat>
        <S.Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <S.StatCount>{data.forks}</S.StatCount>
        </S.Stat>
      </S.Stats>

      <S.ActionsContainer>
        <S.Refresh onPress={onRefresh}>
          <Icon name="refresh" color="blue" size={16} />
          <S.RefreshText>atualizar</S.RefreshText>
        </S.Refresh>

        <S.Delete onPress={onDelete}>
          <Icon name="trash" color="red" size={16} />
          <S.DeleteText>deletar</S.DeleteText>
        </S.Delete>
      </S.ActionsContainer>
    </S.Container>
  );
}

export default Repository;
