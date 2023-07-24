import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Divider,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

// import {act} from 'react-test-renderer';

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/60/ffffff/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/60/ffffff/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/50/fa314a/search--v1.png',
    inactive: 'https://img.icons8.com/ios/50/fa314a/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/500/ffffff/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
  },
  {
    name: 'Shop',
    active:
      'https://img.icons8.com/fluency-systems-filled/60/ffffff/shopping-bag-full.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/60/ffffff/shopping-bag-full.png',
  },
  {
    name: 'Profile',
    active: 'https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg',
    inactive: 'https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg',
  },
];

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');
  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{uri: activeTab === icon.name ? icon.active : icon.inactive}}
        style={[
          styles.icon,
          icon.name === 'Profile' ? styles.profilePicture() : null,
          activeTab === 'Profile' && icon.name === activeTab
            ? styles.profilePicture(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  // console.log(icons);
  return (
    <View style={styles.wrapper}>
      {/* <Divider width={1} animation="vertical" /> */}
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 999,
    backgroundColor: 'black',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: 'black',
    borderTopColor: '#fff',
    borderTopWidth: 0.7,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePicture: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: 'white',
  }),
});

export default BottomTabs;
