import React from "react";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-eva-icons";
import { stopClock } from "react-native-reanimated";
import colors from "../../constants/colors";
import { db } from "../../Firebase";

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

const TimeAndButtons = ({ date, starttime, endtime }) => {
  return (
    <View style={styles.timeAndButtons}>
      <View style={styles.time}>
        <Text style={styles.doctorSpeciality}>{date}</Text>
        <Text style={styles.doctorSpeciality}>
          {starttime} - {endtime}
        </Text>
      </View>
      <View style={styles.btngrp}>
        <Text style={[styles.btn, styles.btnl]}>Cancel</Text>
        <Text style={[styles.btn, styles.btnr]}>Reschedule</Text>
      </View>
    </View>
  );
};

function DoctorScheduleCard(props) {
  const [slots, setSlots] = useState([]);
  const { timeline, email } = props;
  console.log(email)
  const date = new Date();
  useEffect(() => {
    const unsub = db
      .collection("users")
      .where("Email", "==", email)
      .onSnapshot(
        (snap) => {
          let schedules = snap.docs[0].data().Schedules;
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
              tempslots.push(snapshot.data());
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
    return unsub;
  }, []);

  return (
    <View>
      {slots.map((slot) => {
        let canceled = false;
        slot.Patients.forEach((patient) => {
          if (patient.email == email) canceled = patient.cancel;
        });
        var m = date.getMonth() + 1;
        var d = date.getDay();
        var y = date.getFullYear();
        var today = new Date(y, m, d);
        let show =
          (canceled == 0 && timeline == 2) ||
          (!canceled && timeline == 0 && slot.Date <= today) ||
          (!canceled && timeline == 1 && slot.Date > today);

        if (show) {
          return (
            <View style={styles.container}>
              <DoctorDetails
                name={slot.DoctorName}
                speciality={tempslots.Speciality}
              />
              <TimeAndButtons
                date={slot.Date}
                starttime={slot.Starttime}
                endtime={slot.Endtime}
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
