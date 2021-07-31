import React from "react"
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-eva-icons";
import colors from '../../constants/colors';
import { db } from "../../Firebase";

// description
// time
// schedule

const DoctorDetails = ({name, speciality}) => {
    return (

        <View style={styles.doctorDetails}>
            <View>
                <Text style={styles.doctorName}>{name}</Text>
                <Text style={styles.doctorSpeciality}>{speciality}</Text>
            </View>
            <Icon name="github" width={48} height={48} />
        </View>
    )
}

const TimeAndButtons = ({date, starttime, endtime}) => {
    
    return (
        <View style={styles.timeAndButtons}>
            <View style={styles.time}>
                <Text style={styles.doctorSpeciality}>{date}</Text>
                <Text style={styles.doctorSpeciality}>{starttime} - {endtime}</Text>
            </View>
            <View style={styles.btngrp}>
                <Text style={[styles.btn, styles.btnl]}>Cancel</Text>
                <Text style={[styles.btn, styles.btnr]}>Reschedule</Text>
            </View>
        </View>
    )
}

function DoctorScheduleCard(){
    const [schedules, setSchedules] = useState([]);
    const [mine, setmine] = useState("");
    
    useEffect(() => {
        async function unseb (){
        console.log("snap");
        let  response = await db.collection("users")
        .doc("ygBcy5VAzI5TSjqtBaJX")
        .get((snap) => {
            setmine(snap.data());
            console.log(mine);
        })
        .catch((error) =>{
            console.log(error);
        })
        console.log(mine);
        return response;
    }
    console.log(mine);
        return unseb;
    }, []);

        return(
            <View>
        {
            console.log(mine),
            schedules.map((slots) => {
                console.log(mine)
                return (
                    <View style={styles.container}>
                        <DoctorDetails name={"slots.DoctorName"} speciality ={"slots.Speciality"}/>
                        <TimeAndButtons date={"slots.Date"} starttime={"slots.Starttime"} endtime={"slots.Endtime"} />
                    </View>
                )
            })
        }
        </View>
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    doctorDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    doctorName: {
        fontSize: 24,
    },
    doctorSpeciality: {
        fontSize: 18,
        color: colors.dwhite
    },
    timeAndButtons: {
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
    btnl: {
        marginRight: 5,
    },
    btnr: {
        marginLeft: 5,
        color: colors.gwhite,
        backgroundColor: colors.blue,
    }
})
export default DoctorScheduleCard;