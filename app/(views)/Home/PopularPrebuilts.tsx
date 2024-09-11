import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { Prebuilt } from '@/types/homeTypes';
import { getLocalImagePath } from '@/utils/imageMapping';
import Section from '@/components/common/Section';
import customColors from '@/assets/theme/customColors';

const { primary, buttonSecondary } = customColors.colors
interface PopularPrebuiltsProps {
  prebuilts: Prebuilt[];
}

const PopularPrebuilts: React.FC<PopularPrebuiltsProps> = ({ prebuilts }) => (
  <View>
    <View style={styles.cardContainer}>
      {prebuilts.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Cover resizeMode={'contain'} style={styles.cardCover} source={getLocalImagePath(item.imageUrl)} />
          <Card.Content style={styles.cardContent}>
            <Text variant="titleSmall">{item.name}</Text>
            <Text variant="bodySmall">{item.description}</Text>
          </Card.Content>
        </Card>
      ))}




    </View>
    <Button mode="text" onPress={() => { }}>Show All</Button>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '33%',
    backgroundColor: primary,
    opacity: 0.8,
    borderRadius: 9,
    margin: 0,
    padding: 0
  },
  cardCover: {
    backgroundColor: primary,
    height: 80,
  },
  cardContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    gap: 5
  },
  cardContent: {
    marginTop: 'auto',
  }
});

export default PopularPrebuilts;


