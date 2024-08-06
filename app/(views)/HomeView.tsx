import EditScreenInfo from '@/components/common/EditScreenInfo';
import { Text, View } from '@/components/theme/Themed';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import WelcomeScreen from './WelcomeView';

export default function HomeScreen() {
  return (
      <WelcomeScreen />
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

