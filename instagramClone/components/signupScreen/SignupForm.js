import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';
import axios from 'axios';

const SignupForm = ({navigation}) => {
  const SignupFormSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    password: yup
      .string()
      .required('A password is required')
      .min(6, 'Password is too short - should be 6 chars minimum.'),
  });

  const onSignup = async (email, password, username) => {
    try {
      const response = await axios.post(
        'http://localhost:3010/api/api/signup',
        {
          email,
          password,
          username,
        },
      );

      console.log('Signup Success:', response.data.message);

      // Show a success message to the user or navigate to a success screen
      Alert.alert('Signup Success', 'You have successfully signed up!', [
        {
          text: 'OK',
          onPress: () => {
            // You might want to navigate to the login screen after successful signup
            navigation.navigate('LoginScreen');
          },
        },
      ]);
    } catch (error) {
      // Handle signup error

      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : 'An error occurred during signup. Please try again later.';

      Alert.alert('Signup Error', errorMessage);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: '', username: ''}}
        onSubmit={values => {
          onSignup(values.email, values.password, values.username);
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View
              style={[
                styles.inputField,

                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={'#444'}
                autoCapitalize="none"
                keyboardType="email-address"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}></TextInput>
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholder="Username"
                placeholderTextColor={'#444'}
                autoCapitalize="none"
                textContentType="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}></TextInput>
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={'#444'}
                autoCapitalize="none"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}></TextInput>
            </View>
            <View style={{alignItems: 'flex-end', marginBottom: 30}}>
              <Text style={{color: '#6BB0F5'}}>Forgot password?</Text>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Dont't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: '#6BB0F5'}}>Log in</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
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
  button: isValid => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    borderRadius: 4,
    borderColor: '#0096F6',
    borderWidth: 1,
    minHeight: 40,
  }),
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    width: '100%',
  },
});

export default SignupForm;
