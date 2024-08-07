import { useColorScheme } from '@/components/hooks/useColorScheme.web';
import { store } from '@/redux/store';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  withTheme,
} from 'react-native-paper';
import Colors from '@/constants/Colors';
import colors from '../assets/theme/customColors'
import { ScreenHeader } from '@/components/layout/ScreenHeader';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'WelcomeView',
};


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
const theme = {
  ...DefaultTheme,
  colors: colors.colors,
  roundness: 1,
};

//fix this in future  to dynamically render based on route
const headerDeatails = {
  headerShown: true,
  title: '',
}


function RootLayoutNav() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Stack screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#d7eeed'
          }
        }}>
          <Stack.Screen name="(views)/WelcomeView" options={headerDeatails} />
          <Stack.Screen name="(views)/GetStartedView" options={headerDeatails} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="(tabs)" options={headerDeatails} />
        </Stack>
      </PaperProvider>
    </Provider >
  );
}
