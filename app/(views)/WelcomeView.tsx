import customColors from '@/assets/theme/customColors';
import EditScreenInfo from '@/components/common/EditScreenInfo';
import { Text, View } from '@/components/theme/Themed';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const { background, buttonSecondary } = customColors.colors
export default function WelcomeScreen() {
  return (
    <View style={styles.page} lightColor={background}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button mode="contained" dark={false} onPress={() => console.log('hi')} >
        Get Started
      </Button>
      <Button mode="contained" dark={false} onPress={() => console.log('hi')} buttonColor={buttonSecondary}>
        Learn More
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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

