import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  setUsername,
  setEmail,
  setPassword,
  setLoading,
  setError,
} from "@/redux/features/userAuth/signupSlice";
const SignupView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { username, email, password, loading, error } = useSelector(
    (state: RootState) => state.signup,
  );

  const handleSignup = () => {
    dispatch(setLoading(true));
    // Add your signup logic here
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => dispatch(setUsername(text))}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => dispatch(setEmail(text))}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => dispatch(setPassword(text))}
        secureTextEntry
        style={styles.input}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button mode="contained" onPress={handleSignup} loading={loading}>
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
});

export default SignupView;
