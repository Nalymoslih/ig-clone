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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('StoriePost');
        }}></TouchableOpacity>
      <Pressable>
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
            url: 'https://i.pinimg.com/originals/d5/29/09/d52909b3751b3f8507873d280295ccc7.jpg',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    marginBottom: 550,
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 23,
  },
});

export default StoriePost;
