import EditScreenInfo from '@/components/common/EditScreenInfo';
import { Text, View } from '@/components/theme/Themed';
import { StyleSheet } from 'react-native';
import HomeScreen from '../(views)/HomeView';
import { withTheme } from 'react-native-paper';

export default function HomeTab() {
  return (
      <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
