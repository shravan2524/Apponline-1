import React from "react"

import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-eva-icons";
import colors from '../../constants/colors';

// description
// time
// schedule

const DoctorDetails = () => {
    return (
        <View style = {styles.doctorDetails}>
            <View>
                <Text style={styles.doctorName}>Dr Chris Fazier</Text>
                <Text style={styles.doctorSpeciality}>Pediatritian</Text>
            </View>
            <Icon name="github" width={48} height={48} />
        </View>
    )
}

const TimeAndButtons = () =>{
    return (
        <View style={styles.timeAndButtons}>
            <View style={styles.time}>
                <Text style={styles.doctorSpeciality}>12/03/2001</Text>
                <Text style={styles.doctorSpeciality}>10:30</Text>
                <Text style={styles.doctorSpeciality}> Confirmed</Text>
            </View>
            <View style={styles.btngrp}>
                <Text style={[styles.btn,styles.btnl]}>Cancel</Text>
                <Text style={[styles.btn, styles.btnr]}>Reschedule</Text>
            </View>
        </View>
    )
}

const DoctorScheduleCard = () => {
    return (
        <View style={styles.container}>
            <DoctorDetails />
            <TimeAndButtons />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    doctorDetails:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    doctorName:{
        fontSize: 24,
    },
    doctorSpeciality: {
        fontSize: 18,
        color: colors.dwhite
    },
    timeAndButtons:{
        paddingVertical: 10,
        marginTop: 20
    },
    time: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btngrp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btn: {
        flex: 1,
        fontSize: 18,
        paddingVertical: 15,
        backgroundColor: colors.gwhite,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,
    },
    btnl:{
        marginRight: 5,        
    },
    btnr:{
        marginLeft: 5,
        color: colors.gwhite,
        backgroundColor: colors.blue,
    }
})
export default DoctorScheduleCard;