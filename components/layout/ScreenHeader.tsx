import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { View } from "react-native";
export const ScreenHeader = () => (
  <View style={{ height: 50, display: "flex" }}>
    <AntDesign name="left" size={24} color="black" />
  </View>
);
