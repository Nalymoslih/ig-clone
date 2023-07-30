import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';
// import videos from '../../data/videos';

const SingleReel = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const videoRef = useRef(null);
  const onBuffer = buffer => {
    console.log('buffering', buffer);
  };
  const onError = error => {
    console.log(error);
  };
  return (
    <View
      style={{width: windowWidth, height: windowHeight, position: 'relative'}}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          source={item.Video}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SingleReel;
