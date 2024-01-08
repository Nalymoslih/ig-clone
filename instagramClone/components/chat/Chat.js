import {firebase} from '@react-native-firebase/app';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import socket from '../../Socket';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const database = firebase.firestore();
  const messagesRef = database.collection('messages');
  const unsubFromMessagesRef = React.useRef();
  const getMessages = uid => {
    const unsubFromMessages = messagesRef
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setMessages([]);
        setMessages(snapshot._docs);
      });
    unsubFromMessagesRef.current = unsubFromMessages;
  };

























  
  const closeChat = () => {
    setMessages([]);
    unsubFromMessagesRef.current && unsubFromMessagesRef.current();
  };
  useEffect(() => {
    getMessages();
    socket.emit('createRoom', 'room1');
    return () => {
      closeChat();
    };
  }, []);
  const onSend = useCallback((messages = []) => {
    const user = firebase.auth().currentUser;
    const message = {
      message: messages[0].text,
      createdAt: new Date(),
    };
    messagesRef.add(message);
  }, []);
  return (
    <GiftedChat
      messages={messages.map(message => {
        console.log(message._data.message);
        return {
          text: message._data.message,
          _id: message._ref._documentPath._parts[1],
          createdAt: message._data.createdAt.toDate(),
          user: {
            _id: message._ref._documentPath._parts[1],
            name: 'React Native',
          },
        };
      })}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Chat;
