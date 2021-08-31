import React from "react"

import { Text, View, StyleSheet } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../components/Base/Login";
import Register  from "../components/Base/Register";
import BottomNavigator from "./BottomNavigator";
import DoctorScreen from "../screens/DoctorScreen";
const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home"  component={BottomNavigator}/>
            <Stack.Screen name="Doctor" component={DoctorScreen}/>

        </Stack.Navigator>
    )
}

export default StackNavigator;