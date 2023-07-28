import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
        <Image
          source={{
            url: 'https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg',
          }}
          style={styles.story}
        />
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
    // marginRight: 23,
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
