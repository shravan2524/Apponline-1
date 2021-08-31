import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../constants/colors';
import { db } from '../../Firebase';
import PatientCard from '../ScheduleScreen/PatientCard';

const PatientList = (props) => {
    const { schedulesDate, schedulesstime, patients, schedulesetime } = props;
    console.log("patients", patients);

    const [patientsEmail, setpatientsEmail] = useState([]);
    useEffect(() => {
        let temppatientsEmail = [];
        let cnt = 0
        patients.forEach(ele => {
            cnt++;
            db.collection("users")
                .doc(ele.email)
                .onSnapshot((snap) => {
                    console.log(snap.data().Name);
                    temppatientsEmail.push(snap.data().Name);
                    if (cnt == patients.length) {
                        console.log(cnt);
                        console.log("temp", temppatientsEmail);
                        setpatientsEmail([...temppatientsEmail]);
                        console.log("patientsnEmail", patientsEmail);
                    }
                })
        });
    }, [])
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.text}>
                    <Text style={styles.texting}>Patient's List</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.texing1}><Icon
                            name='calendar'
                            type='evilicon'
                            color='white'
                        />  {schedulesDate} </Text>
                    </View>
                    <View>
                        <Text style={styles.texing1}><Icon
                            name='clock'
                            type='evilicon'
                            color='white'
                        />  {schedulesstime} - {schedulesetime} </Text>
                    </View>
                </View>
            </View>
            <View style={styles.cont}>
                {
                    // console.log(patientsEmail)
                    patientsEmail ?
                        patientsEmail.map((ele, index) => {
                            return <PatientCard Name={ele} index={index} />
                        })
                        : null
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cont:{
        paddingLeft : 20,
    },
    header: {
        
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.blue,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    text: {
        alignItems: "center",
        color : "white",
        textDecorationColor : "black",
        textDecorationStyle : "solid",
        textDecorationLine : "underline",

    },
    texting: {
        fontSize: 26,
        color : "white",
        textDecorationColor : "white",
        textDecorationStyle : "solid",
        textDecorationLine : "underline",
        
    },
    texing1: {
        fontSize: 15,
        color : "white",
    }


})

export default PatientList;

