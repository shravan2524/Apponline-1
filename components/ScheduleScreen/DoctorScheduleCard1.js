import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import colors from "../../constants/colors";
import { db } from "../../Firebase";
import "firebase/firestore";
import firebase from "firebase";
import { Text } from 'react-native';
import Appointment from '../Modals/Appointment';
import AppointmentCard from './AppointmentCard';


const DoctorScheduleCard1 = (props) => {
    // const { timeline,email } = props;
    const {timeline} = props;
    var email = "chris@gmail.com";
    const [schedules, setschedules] = useState([])
    useEffect(() => {
        console.log("Schedule email", email);
        let tempSchedules = [];

        let unsub = db.collection("schedule")
        .where("email", "==", email)
        .onSnapshot(
            (snap) => {
                for(var i = 0;i<2;i++){
                    let schedulesPatient = snap.docs[i].data().Patients;
                    let schedulesstime = snap.docs[i].data().Starttime;
                    let schedulesetime = snap.docs[i].data().Endtime;
                    let schedulesDate = snap.docs[i].data().Date;
                    tempSchedules.push({ schedulesDate, schedulesstime, schedulesetime, schedulesPatient })
                }
                setschedules(tempSchedules);
                console.log("schdedgguletemp", schedules);
            },
            (error) => {
                console.log(error);
            }
        );

            return unsub;

}, [])

return (
    <View>
        {
            schedules.map((Appointment) => {
                return(<AppointmentCard  key={Appointment} schedulesDate={Appointment.schedulesDate} schedulesetime={Appointment.schedulesetime} schedulesstime={Appointment.schedulesstime} patients={Appointment.schedulesPatient} />)
                // console.log("jaj" , Appointment.schedulesDate);
            })
        }
    </View>
);
}

const styles = StyleSheet.create({})

export default DoctorScheduleCard1;
