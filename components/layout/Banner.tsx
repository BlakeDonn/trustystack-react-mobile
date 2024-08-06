import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { decrement, increment } from '@/redux/features/counter/counterSlice';
import { Image } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../../assets/images/ccbanner.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200
  },
  countText: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default Banner;

