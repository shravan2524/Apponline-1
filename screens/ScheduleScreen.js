import React, {useState, useEffect} from "react"

import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Timeline from "../components/ScheduleScreen/Timeline";
import DoctorScheduleCard from "../components/ScheduleScreen/DoctorScheduleCard";
import { db } from "../Firebase";

const ScheduleScreen = ({route}) => {
    const {email} = route.params
    const [timeline, setTimeline] = useState(0);
    const [slots, setSlots] = useState([]);
    useEffect(() => {
        console.log("here")
        const unsub = db
        .collection("users")
        .where("Email", "==", email)
        .onSnapshot(
          (snap) => {
            let schedules = snap.docs[0].data().Schedules;
            console.log(schedules)
            getSlots(schedules);
          },
          (error) => {
            console.log(error);
          }
        );
  
      async function getSlots(schedules) {
        let tempslots = [];
        var count = 0;
        await schedules.forEach((scheduleId) => {
          db.collection("schedule")
            .doc(scheduleId)
            .onSnapshot(
              (snapshot) => {
                tempslots.push({...snapshot.data(), id: scheduleId});
                count++;
                if (count == schedules.length) {
                  console.log("slots", tempslots)
                  setSlots(tempslots);
                }
              },
              (error) => {
                console.log(error);
              }
            );
        });
      }
      return unsub;
      }, []);
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Schedule</Text>
            {/*Upcoming Completed Canceled */}
            <Timeline timeline={timeline} setTimeline={setTimeline}/> 
            <DoctorScheduleCard timeline={timeline} email={email} slots={slots} setSlots={setSlots}/>
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