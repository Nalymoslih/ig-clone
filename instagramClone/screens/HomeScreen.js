import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/home/header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POSTS} from '../data/posts';
import BottomTabs, {bottomTabIcons} from '../components/home/BottomTabs';
import {useNavigation} from '@react-navigation/native';
// import Reels from './Reels';
// import Reels from 'react-native-instagram-reels';
// import {Videos} from '../data/videos';
import Reels from './Reels';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
      {/* <Reels /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default HomeScreen;
