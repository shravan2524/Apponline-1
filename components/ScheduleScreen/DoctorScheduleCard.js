import React from "react";
import { useEffect, useState, Input, TextInput } from "react";
import { Pressable, Modal } from "react-native";
import { Text, View, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-eva-icons";
import { stopClock } from "react-native-reanimated";
import colors from "../../constants/colors";
import { db } from "../../Firebase";
import "firebase/firestore";
import firebase from "firebase";
import Review from "../Modals/Review";
// description
// time
// schedule


const DoctorDetails = ({ name, speciality }) => {
  return (
    <View style={styles.doctorDetails}>
      <View>
      <Image 
                style={{
                    flex: 1,
                    resizeMode: "cover",
                    height: 70,
                    width: 70,
                    marginRight : 30,
                    marginLeft: 5,
                    borderRadius : 100,
                }}
                source={require('../../Images/DoctorDefaultProfile.png')}
            />
        </View>
        <View style={{flex : 1, flexDirection : "column"}}>
        <Text style={styles.doctorName}>{name}</Text>
        <Text style={styles.doctorSpeciality}>{speciality}</Text>
        </View>
    </View>
  );
};

const TimeAndButtons = ({ date, starttime, endtime, id, cancel, timeline, doctorname , doctorEmail}) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.timeAndButtons}>
      <View style={styles.time}>
        <Text style={styles.doctorfont}>{date}</Text>
        <Text style={styles.doctorfont}>
          {starttime} - {endtime}
        </Text>
      </View>
      <View style={styles.btngrp}>
      <Modal
        // style={{ backgroundColor: "grey" }}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Review doctorname={doctorname} doctorEmail={doctorEmail} />
        </Modal>
      {
        timeline == 0 ? <Pressable onPress={() => cancel(id)} style={[styles.btn, styles.btnl]}><Text>Cancel</Text></Pressable>
        : <Pressable onPress={() => setModalVisible(true)} style={[styles.btn, styles.btnl]}><Text>Review</Text></Pressable>
      }
      </View>
    </View>
  );
};

function DoctorScheduleCard(props) {
  const { timeline, email, slots, setSlots } = props;
  const date = new Date();
 
async function cancelAppointment(id) {
    console.log(id);
      // id = "RDTateq0lpcGMtLTlGNm";
    const obj = {
      email: email,
      status: true
    }
    const obj1 = {
      email: email,
      status: false
    };
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

        await db.collection("users")
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
                  setSlots(tempslots);
                }
              },
              (error) => {
                console.log(error);
              }
            );
        });
      }
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
        console.log("slot", slot.id)
        var m = date.getMonth();
        var d = date.getDate() + 1;
        var y = date.getFullYear();
        var today = new Date(y, m, d).toISOString().toString().split('T')[0];

        var todayd = today.split('-')[2];
        var todaym = today.split('-')[1];
        var todayy = today.split('-')[0];
        today = `${todayd}-${todaym}-${todayy}`
        // today = "01-06-2021";

        console.log(today)
        let show =
          (canceled && timeline == 2) ||
          (!canceled && (timeline == 0) && (slot.Date.localeCompare(today) > 0 )) ||
          (!canceled && (timeline == 1) && (slot.Date.localeCompare(today) < 0 ));

        if (show) {
          return (
            <View style={[styles.card, styles.elevation]}>
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
                timeline={timeline}
                doctorname={slot.DoctorName}
                doctorEmail={slot.email}
              />
            </View>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flex:1,
    justifyContent : "space-between",
    width: '94%',
    marginHorizontal : 12,
    marginVertical : 10,
  },
  elevation: {
    elevation: 7,
    shadowColor: '#52006A',
  },
  doctorDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  doctorName: {
    fontSize: 22,
  },
  doctorfont : {
    fontSize : 17,
    color: "grey",
  },
  doctorSpeciality: {
    fontSize: 17,
    // backgroundColor : "purple",
    color: colors.llblue,
  },
  timeAndButtons: {
    marginHorizontal : 10,
    // marginRight: 13,
    paddingVertical: 0,
    marginTop: 10,
  },
  time: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  btngrp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  btn: {
    // flex: 1,
    fontSize: 18,
    paddingHorizontal : 20,
    paddingVertical: 13,
    backgroundColor: colors.gwhite,
    justifyContent: "center",
    alignItems : "flex-end",
    textAlign: "center",
    borderRadius: 5,
  },
  btnr: {
    marginLeft: 5,
    color: colors.gwhite,
    backgroundColor: colors.blue,
  },
  button:{
    width : "100%",
    fontSize :15,
    flex : 1,
    position : "absolute",
    bottom : 10,
    alignItems : "center",
    borderColor : "black",
    borderWidth : 0.1,
  }
});
export default DoctorScheduleCard;
