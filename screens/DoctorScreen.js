import React, { useState, useEffect } from "react";

import DoctorProfile from "../components/DoctorScreen.js/DoctorProfile";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { View, Text, FlatList, Button } from "react-native";
import colors from "../constants/colors";
import Info from "../components/DoctorScreen.js/Info";
import Reviews from "../components/DoctorScreen.js/Reviews";
import Location from "../components/DoctorScreen.js/Location";
import { db } from "../Firebase";
import { Alert, Modal, Pressable } from "react-native";
import DoctorCard from "../components/HomeScreen/DoctorCard";
import Appointment from "../components/Modals/Appointment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { auth } from "../Firebase";
import "firebase/firestore";
import firebase from "firebase";
import { First } from "react-bootstrap/esm/PageItem";
function DoctorScreen({ route, navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [doctorInfo, setDoctorInfo] = useState();
  const { id, email } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectdate, setSelectdate] = useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
    var l = String(date);
    console.log(date.length);
    console.log(l);
    var s = l[8];
    s += l[9];
    s += "-";
    if (l[4] == "J") {
      s += "07-";
    } else {
      s += "08-";
    }
    s += l[11] + l[12] + l[13] + l[14];
    setSelectdate(s);
    console.log(s);
  };

  useEffect(() => {
    let unsub = db
      .collection("doctors")
      .doc(id)
      .onSnapshot(
        (snapShot) => {
          setDoctorInfo(snapShot.data());
        },
        (error) => {
          console.log(error);
        }
      );
    return unsub;
  });
  let name = "Dr. John Jose";
  let speciality = "Therapist";
  let about =
    "Dr John.jose is an experiece specialist who is constantly working on imporovind his skills";
  let reviews = [
    {
      name: "Shravan Chenna",
      stars: "5.0",
      desc: "Many thanks to his doctor for getiing my best trearment",
    },
    {
      name: "Shravan Chenna",
      stars: "5.0",
      desc: "Many thanks to his doctor for getiing my best trearment",
    },
    {
      name: "Shravan Chenna",
      stars: "5.0",
      desc: "Many thanks to his doctor for getiing my best trearment",
    },
  ];
  let clinic = "Lotus Clinic";
  let address = "Los Angles, USA";
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    let unseb = db.collection("schedule").onSnapshot(
      (snapshot) => {
        let slots = [];
        snapshot.docs.forEach((doc) => {
          slots.push({ ...doc.data(), _id: doc.id });
        });
        console.log(slots);
        setSchedules(slots);
        console.log(schedules.length);
      },
      (error) => {
        console.log(error);
      }
    );

    return unseb;
  }, []);

  async function appointmentBooking(slotId) {
    console.log("slotId", slotId, "email", email);
    await db
      .collection("schedule")
      .doc(slotId)
      .update({
        Patients: firebase.firestore.FieldValue.arrayUnion(email),
      })
      .then((doc) => {
        alert("Appointment Booked");
      })
      .catch((error) => {
        console.log(error);
      });

    let doc = await db
      .collection("users")
      .doc(email)
      .update({
        Schedules: firebase.firestore.FieldValue.arrayUnion(id),
      });
  }

  return doctorInfo ? (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.header}>
            <DoctorProfile
              name={doctorInfo.name}
              speciality={doctorInfo.speciality}
            />
          </View>
          <View style={styles.infoStyle}>
            <Info style={styles.infoDiv} about={doctorInfo.about} />
            <Reviews style={styles.infoDiv} reviews={reviews} />

            <Location clinic={clinic} address={doctorInfo.address} />
          </View>
        </ScrollView>
      </View>
      <Modal
        style={{ backgroundColor: "grey" }}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.modalText}>
                Dr. {doctorInfo.name}'s Appointments
              </Text>
            </View>
            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View
            style={{
              flexDirection: "row",
              textAlign: "center",
              shadowColor: "#000",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.date} onPress={showDatePicker}>
              <Text style={styles.dateText}>Select Date</Text>
            </TouchableOpacity>
          </View>
          {/* <View> */}
          {schedules.map((i) => {
            if (i.DoctorId == id && selectdate == i.Date) {
              return (
                <View style={styles.div}>
                  <Text>
                    {i.Starttime} {"  -  "}
                    {i.Endtime}
                  </Text>
                  <Pressable
                    style={styles.booknow}
                    onPress={() => appointmentBooking(i._id)}
                  >
                    <Text style={{ color: "white" }}>Book Now</Text>
                  </Pressable>
                  <Text style={{ fontWeight: "bold" }}>Status</Text>
                </View>
              );
            }
          })}
          {/* </View> */}
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ textAlign: "center" }}>Book Appointment</Text>
      </Pressable>
    </View>
  ) : (
    <Text h1>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    margin: 5,
  },
  header: {
    paddingVertical: 36,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  container: {
    backgroundColor: colors.blue,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  infoStyle: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    backgroundColor: "#FFF",
  },
  button: {
    justifyContent: "center",
    bottom: 10,
    backgroundColor: "white",
    padding: 10,
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    // flex: 1,
    flexDirection: "row",
    textAlign: "center",
    shadowColor: "#000",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  textStyle: {
    color: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  date: {
    marginTop: 10,
    backgroundColor: colors.blue,
    padding: 10,
    width: 95,

    borderRadius: 5,
  },
  dateText: {
    color: "white",
  },
  booknow: {
    width: 47,
    backgroundColor: "#361f18",
    borderRadius: 1000,
    padding: 5,
  },
  div: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 20,
    padding: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.lblue,
    borderRadius: 5,
  },
});

export default DoctorScreen;
