// styles/StyledComponents.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
`;

export const SectionTitle = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
  padding-vertical: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.btnColor};
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.textSize}px;
`;

export const ButtonContainer = styled.View`
  margin: 20px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.btnColor};
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${(props) => props.textSize}px;
  font-weight: bold;
`;

export const ModalView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20px;
  padding-top: 50px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 10px;
`;

export const CloseButtonText = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  font-weight: bold;
`;


const TabLabel = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.textSize}px;
  text-align: center;
`;


