import EditScreenInfo from '@/components/common/EditScreenInfo';
import { Text, View } from '@/components/theme/Themed';
import { StyleSheet } from 'react-native';

export default function PCPartPickerTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PC Part picker</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/partpicker.tsx" />
    </View>
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

