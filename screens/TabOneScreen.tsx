import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem/ChatRoomItem";

// import the dummy data
import chatRoomData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {},
});
