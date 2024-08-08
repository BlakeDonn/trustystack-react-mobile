import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Banner from '@/components/layout/Banner';
import customColors from '@/assets/theme/customColors';
import { useFetchData } from '@/hooks/useFetchHomeData';
import PopularPrebuilts from './PopularPrebuilts';
import SoftwareSolutions from './SoftwareSolution';
import Services from './Services';

const { background } = customColors.colors;

const HomeLayout = () => {
  const { prebuilts, services, software } = useFetchData();

  return (
    <ScrollView style={styles.page}>
      <Banner size={100} />
      <PopularPrebuilts prebuilts={prebuilts} />
      <Services services={services} />
      <SoftwareSolutions software={software} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: background,
  },
});

export default HomeLayout;

