import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigators/StackNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
