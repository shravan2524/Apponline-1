import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/HomeScreen';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './Navigators/BottomNavigator';
import Login from './components/Base/Login';


export default function App() {
  return (
    <Login />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
