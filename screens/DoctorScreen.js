import React, { useState, useEffect } from "react";

import DoctorProfile from "../components/DoctorScreen.js/DoctorProfile";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { View, Text } from "react-native";
import colors from "../constants/colors";
import Info from "../components/DoctorScreen.js/Info";
import Reviews from "../components/DoctorScreen.js/Reviews";
import Location from "../components/DoctorScreen.js/Location";
import { db } from "../Firebase";

function DoctorScreen({ route, navigation }) {
  const [doctorInfo, setDoctorInfo] = useState();
  const { id } = route.params;

  useEffect(() => {
    let unsub = db
      .collection("doctors").doc(id)
      .onSnapshot((snapShot) => {
            setDoctorInfo(snapShot.data())
        },
        (error) => {
          console.log(error);
        }
      );
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

  return doctorInfo ? (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <DoctorProfile name={doctorInfo.name} speciality={doctorInfo.speciality} />
      </View>
      <View style={styles.infoStyle}>
        <Info style={styles.infoDiv} about={doctorInfo.about} />
        <Reviews style={styles.infoDiv} reviews={reviews} />
        <Location clinic={clinic} address={doctorInfo.address} />
      </View>
    </ScrollView>
  ) : (
    <Text h1>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 36,
    paddingHorizontal: 10,
    // alignItems: 'center',
    justifyContent: "center",
  },
  container: {
    backgroundColor: colors.blue,
  },
  infoStyle: {
    // height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    backgroundColor: "#FFF",
  },
});

export default DoctorScreen;
