import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import {Icon} from 'react-native-elements';
import colors from '../../constants/colors';

export default function DoctorProfile(props) {    
    return (
        <View style = {styles.container}>
            <Image 
                style={{
                    flex: 1,
                    resizeMode: "cover",
                    height: 100,
                    width: 100,
                }}
                source={require('../../Images/DoctorDefaultProfile.png')}
            />
            <Text style={styles.textColor}>{props.name}</Text>
            <Text style={styles.textColor}>{props.speciality}</Text>
            <View style={{
                flex: 1,
                flexDirection: "row",
                margin : "auto",
                width:100,
                marginTop: 10,
                justifyContent: "space-around"
            }}>
                <View style={styles.imageStyle} >
                    <Icon name="call-outline" type="ionicon"/>
                </View>
                <View style={styles.imageStyle}>
                    <Icon name="comment-dots" type="font-awesome-5"/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        textAlign: "center",
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
        color: "#fff"
    }
});