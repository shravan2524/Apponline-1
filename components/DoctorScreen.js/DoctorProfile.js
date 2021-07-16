import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import { IoCallOutline } from "react-icons/io5";
import { BsFillChatDotsFill } from "react-icons/bs";
import colors from '../../constants/colors';

export default function DoctorProfile(props) {    
    return (
        <View style = {styles.container}>
            <Image 
                style={{
                    resizeMode: "cover",
                    height: 100,
                    width: 100,
                    margin : "auto"
                }}
                source={require('/Projects/Appoinline1/Apponline/Images/DoctorDefaultProfile.png')}
            />
            <Text style={styles.textColor}>{props.name}</Text>
            <Text style={styles.textColor}>{props.speciality}</Text>
            <View style={{
                flex: "1",
                flexDirection: "row",
                margin : "auto",
                width:100,
                marginTop: 10,
                justifyContent: "space-around"
            }}>
                <View style={styles.imageStyle} ><IoCallOutline  /></View>
                <View style={styles.imageStyle} ><BsFillChatDotsFill /></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        textAlign: "center",
        padding: 10,
        justifyContent: 'center',
        // margin: "auto",
    },
    textColor:{
        color: "#fff",
        marginTop: 5,
    },  
    imageStyle:{
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 25,
        backgroundColor: colors.lblue,
        color: "fff"
    }
});