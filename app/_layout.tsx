import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import BpjsPage from './pages/bpjs/bpjs';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="pages/bpjs/bpjs" options={{title:"BPJS"}}/>
        <Stack.Screen name="pages/listrik/listrik" options={{title:"LISTRIK"}}/>
        <Stack.Screen name="pages/pulsa/pulsa" options={{title:"PULSA"}}/>
        <Stack.Screen name="pages/inbox/inbox" options={{title:"INBOX"}}/>
        <Stack.Screen name="pages/home/home" options={{title:"HALAMAN UTAMA"}}/>
        <Stack.Screen name="pages/pin/pin" options={{title:"PIN"}}/>
        <Stack.Screen name="pages/payment/payment" options={{title:"PEMBAYARAN"}}/>
        <Stack.Screen name="pages/qris/qris" options={{title:"QRIS"}}/>
        <Stack.Screen name="pages/history/index" options={{title:"RIWAYAT"}}/>
        <Stack.Screen name="pages/success/success" options={{headerShown:false}}/>
        <Stack.Screen name="pages/profile/profile" options={{title:"PROFIL"}}/>
        <Stack.Screen name="pages/transactionDetail/transactionDetail" options={{title:"DETAIL TRANSAKSI"}}/>
        <Stack.Screen name="pages/maintenance/maintenance" options={{title:""}}/>
     
      </Stack>
    </ThemeProvider>
  );
}
