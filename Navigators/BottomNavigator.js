import React from "react"

import { TouchableOpacity,Text, View, StyleSheet } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import DoctorSreen from "../screens/DoctorSreen";


import colors from "../constants/colors"
import { Icon } from "react-native-eva-icons";

const Tab = createBottomTabNavigator();

function BottomNavigatorButton({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          let icon = label=="Home"?'home':label=="Messages"?'message-circle':label=="Schedule"?'calendar':'settings-2';
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.bottomButton}>
              <Icon name={icon} width={32} fill={isFocused ? colors.blue: colors.dwhite} height={32} />
              <Text style={{ color: isFocused ? colors.blue : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

const BottomNavigator = () => {
    return (
     <Tab.Navigator style={styles.container} tabBar={(props) => <BottomNavigatorButton {...props} />}>
        <Tab.Screen name="Home" component={DoctorSreen}/>
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Messages" component={HomeScreen} />
        <Tab.Screen name="Settings" component={ScheduleScreen} />
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    bottomButton: {
        flex: 1,
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BottomNavigator;