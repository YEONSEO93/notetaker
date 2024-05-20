// // screens/Setting.js


///


import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, Switch, Modal, StatusBar as RNStatusBar } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import Licenses from './Licenses';
import { 
  Container, SectionTitle, Item, Text, ButtonContainer, Button, ButtonText, ModalView, CloseButton, CloseButtonText 
} from '../screens/styles/StyledSetting/';
import { StatusBar } from 'expo-status-bar';

const SettingScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  const { theme, textSize, toggleDarkMode, toggleLargeText, isDarkMode, isLargeText } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    RNStatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
  }, [isDarkMode]);

  const handleAccountPress = () => {
    if (!user) {
      navigation.navigate('Login');
    }
  };

  return (
    <Container style={{ backgroundColor: theme.bgColor }}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <ScrollView>
        <SectionTitle style={{ color: theme.textColor }}>Your account</SectionTitle>
        <Item onPress={handleAccountPress}>
          <Text style={{ color: theme.textColor, fontSize: textSize }}>{user ? user.username : 'Login'}</Text>
        </Item>
        {user && (
          <ButtonContainer>
            <Button onPress={logout} style={{ backgroundColor: theme.btnColor }}>
              <ButtonText style={{ fontSize: textSize }}>Logout</ButtonText>
            </Button>
          </ButtonContainer>
        )}

        <SectionTitle style={{ color: theme.textColor }}>Settings</SectionTitle>
        <Item>
          <Text style={{ color: theme.textColor, fontSize: textSize }}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </Item>
        <Item>
          <Text style={{ color: theme.textColor, fontSize: textSize }}>Large Text</Text>
          <Switch value={isLargeText} onValueChange={toggleLargeText} />
        </Item>

        <SectionTitle style={{ color: theme.textColor }}>About</SectionTitle>
        <Item onPress={() => setModalVisible(true)}>
          <Text style={{ color: theme.textColor, fontSize: textSize }}>About App</Text>
        </Item>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalView style={{ backgroundColor: theme.bgColor }}>
          <CloseButton onPress={() => setModalVisible(false)}>
            <CloseButtonText style={{ color: theme.textColor }}>Close</CloseButtonText>
          </CloseButton>
          <Licenses />
        </ModalView>
      </Modal>
    </Container>
  );
};

export default SettingScreen;


