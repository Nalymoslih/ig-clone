import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {USERS} from '../../data/users';
import StoryModal from '../storiePost/StoryModal';

const Stories = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <View style={{marginBottom: 20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(story.image)}>
            <Image style={styles.story} source={{uri: story.image}} />
            <Text style={{color: 'white', marginLeft: 10}}>
              {story.user.length > 11
                ? story.user.slice(0, 6).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <StoryModal
        visible={!!selectedImage}
        image={selectedImage}
        onClose={handleCloseModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 5,
    borderColor: '#ff8501',
    borderWidth: 3,
    marginLeft: 16,
  },
});

export default Stories;
