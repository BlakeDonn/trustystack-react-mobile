import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
        source={require("../../assets/images/most-cropped.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    borderColor: "white",
  },
});

export default Header;
