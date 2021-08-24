import React from "react";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { Icon } from "react-native-eva-icons";
import colors from "../../constants/colors";
import { Rating, AirbnbRating } from 'react-native-elements';
import { db } from "../../Firebase";
import "firebase/firestore";
import firebase from "firebase";

const Review = ({ doctorname, doctorEmail }) => {
    const [patientreview, setPatientreview] = useState("");
    const [stars, setstars] = useState("0");
    function onFinishRating(rating) {
        console.log("Rating is: " + rating)
    }
    async function review() {
        //patient name
        console.log(doctorname);
        console.log(stars);
        console.log(patientreview);
        let patientsName = "xyz abc";
        await db
        .collection("reviews")
        .doc(doctorEmail)
        .update({
            reviews : firebase.firestore.FieldValue.arrayUnion({
                patientsName,
                stars,
                patientreview
            })
        })
        .then((doc) => {
            // alert("Appointment Booked");
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text>Dr. {doctorname}</Text>
            </View>
            <View>
                <Text style={styles.rating} >Your Rating</Text>
                <AirbnbRating
                    count={5}
                    reviews={["Terrible", "Bad", "ok", "Good", "Excellent",]}
                    defaultRating={stars}
                    onFinishRating={setstars}
                    size={20}
                />
                <TextInput style={styles.textinput}
                    value={patientreview}
                    onChangeText={(text) => setPatientreview(text)}
                    placeholder="Give your Review"
                    maxLength={200}
                    // caretHidden={true}
                    disableFullscreenUI={true}

                />
            </View>
            <Pressable onPress={() => review()} style={styles.button}><Text>Submit Review</Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor :"yellow",
        height: "100%",
    },
    header:{
        width: "100%",
        fontSize: 20,
        paddingVertical : 20,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth : 1,
    },
    textinput:{
        borderColor : "grey",
        borderWidth : 1,
        marginHorizontal : 20,
        marginVertical : 20,
        padding : 10,
        height : 60,
    },  
    button: {
        width: "100%",
        fontSize: 15,
        flex: 1,
        position: "absolute",
        bottom: 10,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 0.1,
    },
    rating:{
        fontSize: 20,
        // flex : 1,
        width : "100%",
        alignItems: "center",
        position : "relative",
        top : 10,
        left : "35%",
        color : colors.star,

    }

})

export default Review;
