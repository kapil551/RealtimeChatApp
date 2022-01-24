import { View, Text } from 'react-native';
import React from 'react';

import styles from './MessageStyles';

const Message = ( { message }) => {

    console.log(message);
  return (
    <View>
      <Text> { message.content } </Text>
    </View>
  );
};

export default Message;
