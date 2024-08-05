import { useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { configureFonts, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import colors from '@/assets/theme/customColors';

export function useFontsAndTheme() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const fontConfig = {
    web: {
      thin: { fontFamily: 'Inter_100Thin', fontWeight: '100' },
      extraLight: { fontFamily: 'Inter_200ExtraLight', fontWeight: '200' },
      light: { fontFamily: 'Inter_300Light', fontWeight: '300' },
      regular: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
      medium: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
      semiBold: { fontFamily: 'Inter_600SemiBold', fontWeight: '600' },
      bold: { fontFamily: 'Inter_700Bold', fontWeight: '700' },
      extraBold: { fontFamily: 'Inter_800ExtraBold', fontWeight: '800' },
      black: { fontFamily: 'Inter_900Black', fontWeight: '900' },
    },
    ios: {
      thin: { fontFamily: 'Inter_100Thin', fontWeight: '100' },
      extraLight: { fontFamily: 'Inter_200ExtraLight', fontWeight: '200' },
      light: { fontFamily: 'Inter_300Light', fontWeight: '300' },
      regular: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
      medium: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
      semiBold: { fontFamily: 'Inter_600SemiBold', fontWeight: '600' },
      bold: { fontFamily: 'Inter_700Bold', fontWeight: '700' },
      extraBold: { fontFamily: 'Inter_800ExtraBold', fontWeight: '800' },
      black: { fontFamily: 'Inter_900Black', fontWeight: '900' },
    },
    android: {
      thin: { fontFamily: 'Inter_100Thin', fontWeight: '100' },
      extraLight: { fontFamily: 'Inter_200ExtraLight', fontWeight: '200' },
      light: { fontFamily: 'Inter_300Light', fontWeight: '300' },
      regular: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
      medium: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
      semiBold: { fontFamily: 'Inter_600SemiBold', fontWeight: '600' },
      bold: { fontFamily: 'Inter_700Bold', fontWeight: '700' },
      extraBold: { fontFamily: 'Inter_800ExtraBold', fontWeight: '800' },
      black: { fontFamily: 'Inter_900Black', fontWeight: '900' },
    },
  };

  const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    colors: colors.colors,
    roundness: 1,
  };

  return { fontsLoaded, theme };
}

