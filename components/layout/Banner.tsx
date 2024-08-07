import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { decrement, increment } from '@/redux/features/counter/counterSlice';
import { Image } from 'react-native';

const Banner = ({ size = 200 }) => {
  return (
    <Image style={{ width: '100%', height: size, resizeMode: 'contain' }} source={require('../../assets/images/ccbanner.png')} />
  );
};

export default Banner;

