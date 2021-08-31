import React, {useState} from "react"

import { TouchableOpacity,Text, View, StyleSheet } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import DoctorScreen from "../screens/DoctorScreen";

import CurrentNews from "../components/News/CurrentNews";

import colors from "../constants/colors"
import { Icon } from "react-native-eva-icons";
import DoctorUi from "../screens/DoctorUi";
import DoctorSchedule from "../components/ScheduleScreen/DoctorSchedule";

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
              key = {index}
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

const BottomNavigator = ({route}) => {
   const {email} = route.params;
  //  const {userType} = route.params;
  // Hardcode
  const [userType, setuserType] = useState("dochtor")
   console.log("bottom email", email)
    return (
     <Tab.Navigator style={styles.container} tabBar={(props) => <BottomNavigatorButton {...props} />} >
            <Tab.Screen name="Home" component={userType == "doctor"?DoctorUi:HomeScreen}  initialParams={{email}}/>
            <Tab.Screen name="Schedule" component={userType == "doctor"?DoctorSchedule:ScheduleScreen}  initialParams={{email}}/>
            <Tab.Screen name="news" component={CurrentNews} initialParams={{email}} />
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