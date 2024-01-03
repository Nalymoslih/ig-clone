import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import LoginForm from '../components/loginScreen/LoginForm';
import {useNavigation} from '@react-navigation/native';

const instagram_logo =
  'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: instagram_logo, height: 100, width: 100}} />
      </View>
      <LoginForm />
    </View>
  );
};












const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
});

export default LoginScreen;
