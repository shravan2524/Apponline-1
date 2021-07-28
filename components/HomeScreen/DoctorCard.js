import React from "react";
import { TouchableOpacity } from "react-native";

import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-eva-icons";
import colors from "../../constants/colors";
const DoctorCard = ({ id, visible, rating, speciality, name, navigation }) => {
  return (
    <TouchableOpacity
      style={visible ? styles.container : [styles.containerInvisible]}
      onPress = {() => {
          if(id){
            navigation.navigate("Doctor", {
                id
            })
          }
      }}
    >
      {visible ? <Icon name="github" width={48} height={48} /> : null}
      <View style={styles.description}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.speciality}>{speciality}</Text>
      </View>
      <Text style={styles.rating}>{rating}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingVertical: 20,
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  containerInvisible: {
    flex: 1,
    margin: 4,
    padding: 20,
    paddingVertical: 30,
    backgroundColor: "transparent",
  },
  description: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  speciality: {
    fontSize: 18,
  },
  rating: {
    marginTop: 10,
    fontSize: 20,
  },
});

export default DoctorCard;
