import React, {useState} from "react"

import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Timeline from "../components/ScheduleScreen/Timeline";
import DoctorScheduleCard from "../components/ScheduleScreen/DoctorScheduleCard";


const ScheduleScreen = ({route}) => {
    const {email} = route.params
    const [timeline, setTimeline] = useState(0);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Schedule</Text>
            {/*Upcoming Completed Canceled */}
            <Timeline timeline={timeline} setTimeline={setTimeline}/> 
            <DoctorScheduleCard timeline={timeline} email={email}/>
        </ScrollView>    
    )
}

const styles = StyleSheet.create({
    header:{
        paddingVertical: 36,
        paddingHorizontal: 10,
        fontSize: 30,
        fontWeight: "600"
    },
    container:{
        backgroundColor: "#fff"
    }
})
export default ScheduleScreen;