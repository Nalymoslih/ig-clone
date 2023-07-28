import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {USERS} from '../../data/users';

import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginBottom: 20}}>
      <TouchableOpacity onPress={() => navigation.navigate('StoriePost')}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {USERS.map((story, index) => (
            <View key={index} style={{alignItems: 'center'}}>
              <Image
                style={styles.story}
                source={{
                  uri: story.image,
                }}
              />
              <Text style={{color: 'white', marginLeft: 10}}>
                {story.user.length > 11
                  ? story.user.slice(0, 6).toLowerCase() + '...'
                  : story.user.toLowerCase()}
              </Text>
            </View>
          ))}
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
};
// console.log(USERS);
const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    marginLeft: 16,
    borderColor: '#ff8501',
  },
});

export default Stories;
