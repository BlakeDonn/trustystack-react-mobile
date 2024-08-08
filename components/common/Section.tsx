import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text variant="titleLarge" style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    padding: 10,
  },
  sectionTitle: {
    marginBottom: 10,
  },
  sectionContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Section;

