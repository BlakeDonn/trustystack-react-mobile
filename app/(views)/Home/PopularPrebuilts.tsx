import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { Prebuilt } from '@/types/homeTypes';
import { getLocalImagePath } from '@/utils/imageMapping';
import Section from '@/components/common/Section';

interface PopularPrebuiltsProps {
  prebuilts: Prebuilt[];
}

const PopularPrebuilts: React.FC<PopularPrebuiltsProps> = ({ prebuilts }) => (
  <Section title="Popular Prebuilt">
    {prebuilts.map((item, index) => (
      <Card key={index} style={styles.card}>
        <Card.Cover style={styles.cardCover} source={getLocalImagePath(item.imageUrl)} />
        <Card.Content>
          <Text variant="titleMedium">{item.name}</Text>
          <Text variant="bodyMedium">{item.description}</Text>
        </Card.Content>
      </Card>
    ))}
    <Button mode="contained" onPress={() => { }}>Show All</Button>
  </Section>
);

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 10,
  },
  cardCover: {
    backgroundColor: '#ffffff',
  },
});

export default PopularPrebuilts;


