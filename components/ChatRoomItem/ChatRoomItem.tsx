import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./ChatRoomItemStyles";

const ChatRoomItem = ({ chatRoom }) => {
  // console.log(chatRoom);

  const user = chatRoom.users[1];

  return (
    // ChatRoomItem
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>1</Text>
      </View>

      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
