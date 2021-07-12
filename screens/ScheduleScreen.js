import React from "react"

import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Timeline from "../components/ScheduleScreen/Timeline";
import DoctorScheduleCard from "../components/ScheduleScreen/DoctorScheduleCard";




/// Title
/// TimeLine
/// VisitCard
///   Nearest Visit
///   Future Visits
const ScheduleScreen = () => {
    return (
        <ScrollView>
            <Text style={styles.header}>Schedule</Text>
            <Timeline />
            <DoctorScheduleCard />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingVertical: 36,
        paddingHorizontal: 10,
        fontSize: 30,
        fontWeight: 600
    }
})
export default ScheduleScreen;