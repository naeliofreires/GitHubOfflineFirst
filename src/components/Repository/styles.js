import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 15px;
  border: 1px solid white;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Stat = styled.View`
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Refresh = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

export const RefreshText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Delete = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

export const DeleteText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`;
