import React from "react"

import { Text, View, StyleSheet } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../components/Base/Login";
import Register  from "../components/Base/Register";
import DoctorProfile from "../components/DoctorScreen.js/DoctorProfile";
import BottomNavigator from "./BottomNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Register}/>
            <Stack.Screen name="Primary" component={BottomNavigator}/>
            <Stack.Screen name="DoctorProfile" component={DoctorProfile}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;