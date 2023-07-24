import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React from 'react';

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Phone number, username, or email"
          placeholderTextColor={'#444'}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}></TextInput>
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#444'}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"></TextInput>
      </View>

      <Button title="login" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    backgroundColor: '#fafafa',
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
  },
});

export default LoginForm;
