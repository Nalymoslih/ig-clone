import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';
import {SafeAreaView} from 'react-navigation';
import {set} from 'mongoose';
// import videos from '../../data/videos';
import Ionic from 'react-native-vector-icons/Ionicons';

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

  const [mute, setMute] = React.useState(false);
  // console.log(item);

  return (
    <View
      style={{width: windowWidth, height: windowHeight, position: 'relative'}}>
      <TouchableOpacity
        onPress={() => setMute(!mute)}
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
          paused={false}
          resizeMode="cover"
          source={item.vdo}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <Image
        style={{
          fontSize: 30,
          collor: 'white',
          position: 'absolute',
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: 'rgbe(52,52,52,0.9)',
          borderRadius: 100,
          padding: 10,
        }}
        source={{
          uri: 'https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector-for-your-web-design-logo-ui-illustration.jpg?s=612x612&w=0&k=20&c=czrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=',
        }}
      />
    </View>
  );
};

export default SingleReel;
