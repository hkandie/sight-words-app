import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return <Text>{"loading"}</Text>;
  }

  return (
    <ThemeProvider value={DefaultTheme}>      
      <ThemedView>
        <Stack
          initialRouteName="index"          
          screenOptions={{
            title: 'Sight Words Learning',
            headerStyle: {
              backgroundColor: '#f8f8f8',              
            },
            headerTintColor: '#333',
          }}
        />
      </ThemedView>
    </ThemeProvider>
  );
}

