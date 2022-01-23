import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./ChatRoomItemStyles";

const ChatRoomItem = () => {

  return (

    // ChatRoomItem
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>1</Text>
      </View>

      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
        style={styles.image}
      />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.text}>11.11 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          Hola message fjdgiogndfpndofpjgoptjgodjodfpjgpodfjgpojgkdpkd
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
