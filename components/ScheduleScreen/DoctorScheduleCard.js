import React from "react";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-eva-icons";
import { stopClock } from "react-native-reanimated";
import colors from "../../constants/colors";
import { db } from "../../Firebase";
import "firebase/firestore";
import firebase from "firebase";
// description
// time
// schedule


const DoctorDetails = ({ name, speciality }) => {
  return (
    <View style={styles.doctorDetails}>
      <View>
        <Text style={styles.doctorName}>{name}</Text>
        <Text style={styles.doctorSpeciality}>{speciality}</Text>
      </View>
      <Icon name="github" width={48} height={48} />
    </View>
  );
};

const TimeAndButtons = ({ date, starttime, endtime, id, cancel }) => {
  return (
    <View style={styles.timeAndButtons}>
      <View style={styles.time}>
        <Text style={styles.doctorSpeciality}>{date}</Text>
        <Text style={styles.doctorSpeciality}>
          {starttime} - {endtime}
        </Text>
      </View>
      <View style={styles.btngrp}>
        <Pressable onPress={() => cancel(id)} style={[styles.btn, styles.btnl]}><Text>Cancel</Text></Pressable>
        <Text style={[styles.btn, styles.btnr]}>Reschedule</Text>
      </View>
    </View>
  );
};

function DoctorScheduleCard(props) {
  const { timeline, email, slots, setSlots } = props;
  const date = new Date();
 
  async function cancelAppointment(id) {
    const obj = {
      email: "abc@gmail.con",
      status: true
    }
    const obj1 = {
      email: "abc@gmail.con",
      status: false
    }
    console.log(id);

    await db.collection("schedule")
      .doc(id)
      .update({
        Patients: firebase.firestore.FieldValue.arrayRemove(obj),
      })

    await db.collection("schedule")
      .doc(id)
      .update({
        Patients: firebase.firestore.FieldValue.arrayUnion(obj1)
      })

    let tempSlots = slots.map(slot =>({...slot}))
    tempSlots.forEach((slot, index) => {
      slot.Patients.forEach((patient, pindex) => {
        if(patient.email == obj.email)
          tempSlots[index].Patients[pindex].status = false 
      })
    })
    console.log(tempSlots);
    setSlots(tempSlots)
    // window.location.reload();
  }

  return (
    <View>
      {slots.map((slot) => {
        let canceled = false;
        if (slot) {
          slot.Patients.forEach((patient) => {
            if (patient.email == email) canceled = (patient.status == false);
          });
        }
        var m = date.getMonth() + 1;
        var d = date.getDay();
        var y = date.getFullYear();
        var today = new Date(y, m, d).toISOString.toString().split('T')[0];
        let show =
          (canceled && timeline == 2) ||
          (!canceled && (timeline == 0) && slot.Date <= today) ||
          (!canceled && (timeline == 1) && slot.Date > today);

        if (show) {
          return (
            <View style={styles.container}>
              <DoctorDetails
                name={slot.DoctorName}
                speciality={slot.Speciality}
              />
              <TimeAndButtons
                date={slot.Date}
                starttime={slot.Starttime}
                endtime={slot.Endtime}
                cancel={cancelAppointment}
                id={slot.id}
              />
            </View>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  doctorDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  doctorName: {
    fontSize: 24,
  },
  doctorSpeciality: {
    fontSize: 18,
    color: colors.dwhite,
  },
  timeAndButtons: {
    paddingVertical: 10,
    marginTop: 20,
  },
  time: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btngrp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 15,
    backgroundColor: colors.gwhite,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
  },
  btnl: {
    marginRight: 5,
  },
  btnr: {
    marginLeft: 5,
    color: colors.gwhite,
    backgroundColor: colors.blue,
  },
});
export default DoctorScheduleCard;
