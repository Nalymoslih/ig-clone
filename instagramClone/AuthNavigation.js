import React, {useEffect, useState} from 'react';
import {SignedInStack, SignedOutStack} from './navigation';
import firebase from '@react-native-firebase/app';

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