import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { SoftwareSolution } from '@/types/homeTypes';
import { getLocalImagePath } from '@/utils/imageMapping';
import Section from '@/components/common/Section';

interface SoftwareSolutionsProps {
  software: SoftwareSolution[];
}

const SoftwareSolutions: React.FC<SoftwareSolutionsProps> = ({ software }) => (
  <Section title="Software Solutions">
    {software.map((item, index) => (
      <Card key={index} style={styles.card}>
        <Card.Cover source={getLocalImagePath(item.imageUrl)} />
        <Card.Content>
          <Text variant="titleMedium">{item.name}</Text>
        </Card.Content>
      </Card>
    ))}
  </Section>
);

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 10,
  },
});

export default SoftwareSolutions;

