import React, {useEffect, useState} from 'react';
import {SignedInStack, SignedOutStack} from './navigation';
import firebase from '@react-native-firebase/app';
import {Text} from 'react-native';

const AuthNavigation = () => {
  const getUser = async () => {
    const value = await AsyncStorage.getItem('token');
    return value;
  };
  const [currentUser, setCurrentUser] = useState(null);

  const useHandler = user =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => useHandler(user));
  }, []);

  return currentUser ? <SignedInStack /> : <SignedOutStack />;
};

export default AuthNavigation;

// import React, {useEffect, useState} from 'react';
// import {SignedInStack, SignedOutStack} from './navigation';
// import {View, Text} from 'react-native'; // Import any necessary components
// const AuthNavigation = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Call your backend API to check the user's authentication status
//     fetch('http://localhost:3010/api/check-auth', {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + 'yourActualAccessToken', // Replace with the actual token
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Set the isLoggedIn state based on the response
//         setIsLoggedIn(data.isLoggedIn);
//       })
//       .catch(error => {
//         console.error('Error checking authentication:', error);
//       });
//   }, []);

//   return <View>{isLoggedIn ? <SignedInStack /> : <SignedOutStack />}</View>;
// };

// export default AuthNavigation;
