import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";

import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import styles from "./MessageInputStyles";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const onPlusClicked = () => {
    console.warn("On plus clicked");
  };

  const sendMessage = () => {
    // send message
    console.warn("sending: ", message);

    setMessage("");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (

    <KeyboardAvoidingView
      style={styles.rootContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Message"
        />

        <Feather name="camera" size={24} color="#595959" style={styles.icon} />

        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="#595959"
          style={styles.icon}
        />

      </View>

      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {
            message 
                ? (
                    <Ionicons name="send" size={18} color="white" />
                ) 
                : (
                    <AntDesign name="plus" size={24} color="white" />
                )
        }
      </Pressable>

    </KeyboardAvoidingView>
  );
};

export default MessageInput;
