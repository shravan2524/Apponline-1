import React, {useEffect, useState} from "react"

import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Icon } from "react-native-eva-icons";
import DoctorCard from "./DoctorCard";
import colors from "../../constants/colors";

import {db} from "../../Firebase";

let doctorsList = [
    {
        name: "Dr Chris",
        speciality: "Peditritian",
        rating: "4.8",
        empty: false,
    },
    {
        name: "Dr Chris",
        speciality: "Peditritian",
        rating: "4.8",
        empty: false
    },
    {
        name: "Dr Chris",
        speciality: "Peditritian",
        rating: "4.8",
        empty: false
    },
    {
        name: "Dr Chris",
        speciality: "Peditritian",
        rating: "4.8",
        empty: false
    },
    {
        name: "Dr Chris",
        speciality: "Peditritian",
        rating: "4.8",
        empty: false
    }

]

const formatData = (list) => {
    if(list.length%2){
        list.push({
            name:"",
            speciality:"",
            rating:"",
            empty:true
        })
    }
    return list;
}

const PopularDoctors = (props) => {
    const [doctorsList, setDoctorsList] = useState([]);

    useEffect(() => {
        let unsub = db.collection("doctors")
            .onSnapshot((snapshot) => {
                    let doctors = [];
                    snapshot.docs.forEach(doc => {
                        doctors.push(doc.data());
                    })
                    setDoctorsList(doctors);
                }, (error) => {
                    console.log(error)
                }
            );
        return unsub;
    }, [])


    const renderItem = ({item, index}) => {
        if(item.empty == true){
           return <DoctorCard visible={false} name={''} speciality={''} rating={''}/>
        }
        return (
            <DoctorCard visible={true} name={item.name} speciality={item.speciality} rating={item.rating} />
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headText}>Popular Doctors</Text>
            {doctorsList != []?
                <FlatList
                    data = {formatData(doctorsList)}
                    style= {styles.list}
                    renderItem={renderItem}
                    numColumns = {2}
                />:
                <Text h1>Loading...</Text>
            }
        </View>   
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        margin: 10
    },
    headText:{
        fontSize: 28,
        padding: 10,
        fontWeight: 400
    }

})

export default PopularDoctors;