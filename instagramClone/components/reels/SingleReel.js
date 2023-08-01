import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import {SafeAreaView} from 'react-navigation';
// import videos from '../../data/videos';

const SingleReel = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const videoRef = useRef(null);
  console.log({index});
  const onBuffer = buffer => {
    console.log('buffering', buffer);
  };
  const onError = error => {
    console.log(error);
  };

  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);
  // console.log(item);

  return (
    <View
      style={{width: windowWidth, height: windowHeight, position: 'relative'}}>
      <TouchableOpacity
        activeOpacity={0.9}
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
          paused={currentIndex == index}
          // paused={currentIndex == index ? false : true}
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
          fontSize: mute ? 30 : 0,
          collor: 'white',
          position: 'absolute',
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: 'rgbe(52,52,52,0.6)',
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
        source={{
          uri: 'https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector-for-your-web-design-logo-ui-illustration.jpg?s=612x612&w=0&k=20&c=czrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=',
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 80,
          padding: 10,
        }}>
        <View style={{}}>
          <TouchableOpacity style={{width: 150, top: 60}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  margin: 10,
                  tp: 60,
                  backgroundColor: 'white',
                }}>
                <Image
                  source={item.postProfile}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 100,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <Text style={{color: 'white', fontSize: 16}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: 'white',
              marginHorizontal: 10,
              top: 60,
            }}>
            {item.description}
          </Text>
          <View>
            {/* <Image
              style={{
                width: 30,
                height: 30,
                color: 'white',
                borderRadius: 100,
                top: 60,
              }}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/000/421/044/original/music-note-icon-vector-illustration.jpg',
              }}
            /> */}
            {/* <Text style={{color: 'white', top: 60}}>Orginal audio</Text> */}
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          right: 0,
        }}>
        <TouchableOpacity style={{padding: 10}}>
          <Image
            style={{width: 30, height: 30}}
            source={{
              url: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
            }}
          />
          <Text style={{color: 'white'}}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Image
            style={{width: 30, height: 30}}
            source={{
              url: 'https://img.icons8.com/material-outlined/60/ffffff/speech-bubble--v1.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Image
            style={{width: 30, height: 30}}
            source={{
              url: 'https://img.icons8.com/material-outlined/60/ffffff/sent.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Image
            style={{width: 30, height: 30, color: 'white'}}
            source={{
              url: 'https://icon-library.com/images/three-dots-icon/three-dots-icon-8.jpg',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Image
            style={{width: 40, height: 40, color: 'white'}}
            source={{
              url: 'https://static.thenounproject.com/png/934821-200.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleReel;
