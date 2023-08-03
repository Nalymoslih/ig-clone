import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {USERS} from '../../data/users';
import InstaStory from 'react-native-insta-story';
import {shareStory} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();
  const data = [
    {
      user_id: 1,
      user_image:
        'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
      user_name: 'Ahmet Çağlar Durmuş',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      user_name: 'Test User',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
      ],
    },
  ];

  const [seenStories, setSeenStories] = useState(new Set());

  const updateSeenStories = ({story: {story_id}}) => {
    setSeenStories(prevSet => {
      prevSet.add(story_id);
      return prevSet;
    });
  };

  const handleSeenStories = async item => {
    console.log(item);
    const storyIds = [];
    seenStories.forEach(storyId => {
      if (storyId) storyIds.push(storyId);
    });
    if (storyIds.length > 0) {
      await fetch('myApi', {
        method: 'POST',
        body: JSON.stringify({storyIds}),
      });
      seenStories.clear();
    }
  };

  return (
    <InstaStory
      data={data}
      duration={10}
      onStart={item => console.log(item)}
      onClose={handleSeenStories}
      onStorySeen={updateSeenStories}
      renderCloseComponent={({item, onPress}) => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text onPress={shareStory}>Share</Text>
            <Text onPress={onPress}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      renderTextComponent={({item, profileName}) => (
        <View>
          <Text>{profileName}</Text>
          <Text>{item.customProps?.yourCustomProp}</Text>
        </View>
      )}
      style={{marginTop: 30}}
    />

    // TESt
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
