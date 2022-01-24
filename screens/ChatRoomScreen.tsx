import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import Message from "../components/Message/Message";

// import the dummy data
import chatRoomData from "../assets/dummy-data/Chats";

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default ChatRoomScreen;
