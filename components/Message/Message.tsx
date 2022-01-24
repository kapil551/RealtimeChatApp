import { View, Text } from "react-native";
import React from "react";

import styles from "./MessageStyles";

const myID = "u1";

const Message = ({ message }) => {
    //console.log(message);

  const isMe = message.user.id === myID;
    //console.log(isMe);

  return (

    <View style={[ styles.container, isMe ? styles.rightContainer : styles.leftContainer ]}>
      <Text style={{ color: isMe ? 'black' : 'white' }}> {message.content} </Text>
    </View>
  );
};

export default Message;
