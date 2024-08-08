import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { Service } from '@/types/homeTypes';
import { getLocalImagePath } from '@/utils/imageMapping';
import Section from '@/components/common/Section';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => (
  <Section title="Our Services">
    {services.map((item, index) => (
      <Card key={index} style={styles.card}>
        <Card.Cover source={getLocalImagePath(item.imageUrl)} />
        <Card.Content>
          <Text variant="titleMedium">{item.name}</Text>
          <Text variant="bodyMedium">{item.description}</Text>
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

export default Services;

