import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return <Text>{"loading"}</Text>;
  }

  return (
    <ThemeProvider value={DefaultTheme}>      
      <View>
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
      </View>
    </ThemeProvider>
  );
}

