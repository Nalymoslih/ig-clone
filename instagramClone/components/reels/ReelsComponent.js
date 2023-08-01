import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videos} from '../../data/videos';
import SingleReel from './SingleReel';

const ReelsComponent = () => {
  const [cuurentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndexValue = index => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
      data={videos}
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} cuurentIndex={cuurentIndex} />
      )}
      keyExtractor={({item, index}) => index}
    />
  );
};

export default ReelsComponent;
