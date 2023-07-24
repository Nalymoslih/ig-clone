import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NewPostScreen from './screens/NewPostScreen';
import HomeScreen from './screens/HomeScreen';
import SignedInStack from './navigation';
// import NewPostScreen from './screens/NewPostScreen';

function App() {
  // return <HomeScreen />;
  // return <NewPostScreen />;
  return <SignedInStack />;
}

const styles = StyleSheet.create({});

export default App;
