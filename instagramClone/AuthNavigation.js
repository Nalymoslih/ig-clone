import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SignedInStack, SignedOutStack} from './navigation';
// import {firebase} from '@react-native-firebase/firestore';
// import {firebase} from '@react-native-firebase/installations';
import firebase from '@react-native-firebase/app';
import {useGestureHandlerRef} from '@react-navigation/stack';

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const useHandler = user =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => useHandler(user));
  }, []);

  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
