import React from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";

import Message from "../components/Message/Message";

// import the dummy data
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput/MessageInput";
import { useNavigation, useRoute } from "@react-navigation/native";

const ChatRoomScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  // console.log(route);
  // console.warn("Displaying Chat room: ", route.params?.id);

  navigation.setOptions({ title: 'Elon Musk' });

  return (

    <SafeAreaView style={styles.page}>
        
      {/* list the chat messages */}
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />

      {/* Input a new chat message */}
      <MessageInput />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default ChatRoomScreen;
