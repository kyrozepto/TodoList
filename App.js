import React from 'react';
import TodoList from './src/screens/TodoList';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

const App = () => {
  const [fontsLoaded] = useFonts({
    'SequelSans-Bold': require('./assets/fonts/SequelSansBoldDisp.ttf'),
    'SequelSans-Light': require('./assets/fonts/SequelSansLightDisp.ttf'),
    'SequelSans-Medium': require('./assets/fonts/SequelSansMediumDisp.ttf'),
    'SequelSans-Roman': require('./assets/fonts/SequelSansRomanDisp.ttf'),
    'SequelSans-SemiBold': require('./assets/fonts/SequelSansSemiBoldDisp.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <TodoList />;
};

export default App;