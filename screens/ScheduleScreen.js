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
        async function getData() {
          try {
            let doc = await db
              .collection("users")
              .where("Email", "==", email)
              .get();
            doc = doc.docs[0].data().Schedules;
            doc = await getSlots(doc);
            setSlots(doc);
          }
          catch (err) {
            console.log(err);
          }
        }
    
        async function getSlots(schedules) {
          let tempslots = [];
          await schedules.forEach(async (scheduleId) => {
            await db.collection("schedule")
              .doc(scheduleId)
              .get()
              .then((doc) => {
                if (doc.exists) {
                  tempslots.push({ ...doc.data(), id: scheduleId })
                }
              });
          });
          return tempslots;
        }
        getData();
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