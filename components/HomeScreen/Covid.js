import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useEffect, useState } from 'react';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Covid = () => {
    const [status, setstatus] = useState([])
    useEffect(() => {
        fetch('https://data.covid19india.org/v4/min/data.min.json')
        .then((response) => response.json())
        .then((json) => {
            console.log("covid", json.MH.districts.Mumbai.total)
            setstatus(json.MH.districts.Mumbai.total);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.cont}><Text style={styles.fontinchead}>Covid-19 Status</Text></View>
            <View style={styles.div1}><Text style={styles.fontinc2}>
                Mumbai, Maharashtra</Text></View>
            <View style={styles.container1}>
                <View style={styles.div}>
                    <Text style={[styles.txt, styles.fontinc]}>{status.confirmed}</Text>
                    <Text style={[styles.txt, styles.fontinc1]}>Confirmed</Text>
                </View>
                <View style={styles.div}>
                    <Text style={[styles.txt, styles.fontinc]}>{status.recovered}</Text>
                    <Text style={[styles.txt, styles.fontinc1]}>Recoverd</Text>
                </View>
                <View style={styles.div}>
                    <Text style={[styles.txt, styles.fontinc]}>{status.vaccinated1}</Text>
                    <Text style={[styles.txt, styles.fontinc1]}>Vaccinated</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fontinchead : {
        fontSize : 25,
        textDecorationColor : "black",
        textDecorationStyle : "solid",
        textDecorationLine : "underline",

    },
    cont:{
        alignItems : "center",
        justifyContent : "center",
        paddingTop : 30,
        
    },  
    container : {
        flex : 1,
        flexDirection : "column",
    },
    container1 : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-around",
    },
    div:{
        backgroundColor : colors.lstar,
        borderRadius : 5,
        borderColor : colors.blue,
        alignItems  : "center",
        borderWidth : 0.2,
        padding : 10,
        flex : 1,
        marginHorizontal : 5,
        height : 100,
        justifyContent : "center",
        color : "white",
    },
    tex:{
        color : "white",
    },
    fontinc : {
        fontSize : 20,
    },
    fontinc1 : {
        fontSize : 12,
        color : colors.blue,
    },
    fontinc2:{
        fontSize : 18,
        padding : 10,
    },
    div1 : {
        flex : 1,
        flexDirection : "row",
        // backgroundColor : "yellow",
        alignItems : "center",
        width : 220,
        justifyContent : "space-around",


    },
})

export default Covid;
