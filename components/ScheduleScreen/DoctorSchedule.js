import React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Timeline1 from './Timeline1';
import DoctorScheduleCard1 from './DoctorScheduleCard1';

const DoctorSchedule = ({route}) => {
    const {email} = route.params
    const [timeline, setTimeline] = useState(0);
    const [slots, setSlots] = useState([]);
    return (
        <ScrollView style={styles.container}>
        <Text style={styles.header}>Schedule</Text>
        {/* <Timeline1 timeline={timeline} setTimeline={setTimeline}/>  */}
        <DoctorScheduleCard1 email={email}/>
    </ScrollView>    
    );
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

export default DoctorSchedule;
