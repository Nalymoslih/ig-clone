import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {USERS} from '../../data/users';

const StoriePost = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Pressable
        style={styles.Container}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Image
          source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}}
          style={{width: 30, height: 30, marginBottom: 550}}
        />
      </Pressable>
      <Text style={styles.headerText}>Stories</Text>
      <Text></Text>

      <View>
        {USERS.map((story, index) => (
          <Image
            key={index}
            style={styles.story}
            source={{uri: story.imageStories}}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Container: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  headerText: {
    marginBottom: 550,
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    position: 'absolute',
    top: 53,
    left: 60,
    zIndex: 10,
  },
  story: {
    position: 'relative',
    width: 400,
    flex: 1,
    resizeMode: 'cover',
  },
});

export default StoriePost;
