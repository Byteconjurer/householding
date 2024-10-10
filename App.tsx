import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import RootStackNavigator from './navigators/RootStackNavigator';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
