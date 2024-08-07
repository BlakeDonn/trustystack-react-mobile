import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavigationButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
});

export default NavigationButton;
