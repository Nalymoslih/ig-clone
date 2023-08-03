import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {firebase} from '@react-native-firebase/database';

const ChatMessage = ({text, isSender}) => {
  return (
    <View
      style={[
        styles.messageContainer,
        isSender ? styles.senderMessage : styles.receiverMessage,
      ]}>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hey!', isSender: true},
    {id: '2', text: 'Hello!', isSender: false},
    // Add more messages here
  ]);
  const [messageText, setMessageText] = useState('');
  const flatListRef = useRef();

  const sendMessage = () => {
    if (messageText.trim() === '') return;

    const newMessage = {
      id: `${messages.length + 1}`,
      text: messageText.trim(),
      isSender: true,
    };

    setMessages([...messages, newMessage]);
    setMessageText('');

    // Scroll to the end of the list when a new message is sent
    flatListRef.current.scrollToEnd();
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ChatMessage text={item.text} isSender={item.isSender} />
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          onChangeText={text => setMessageText(text)}
          value={messageText}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Image
            source={{
              uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/send-message-6-663814.png?f=webp&w=256',
            }} // Replace with your send icon
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C5',
    top: 30,
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0F0F0',
    top: 30,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 12,
    backgroundColor: '#F0F0F0',
  },
  sendIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    tintColor: '#0084FF',
  },
});

export default Chat;
