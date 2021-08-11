import React, {useEffect, useState} from "react"

import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Icon } from "react-native-eva-icons";
import DoctorCard from "./DoctorCard";
import colors from "../../constants/colors";

import {db} from "../../Firebase";
import { TouchableOpacity } from "react-native";

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

const PopularDoctors = ({ email, navigation }) => {
    const [doctorsList, setDoctorsList] = useState([]);

    useEffect(() => {
        let unsub = db.collection("doctors")
            .onSnapshot((snapshot) => {
                    let doctors = [];
                    snapshot.docs.forEach(doc => {
                        doctors.push({...doc.data(), _id: doc.id});
                    })
                    doctors.sort((a,b) => {
                        return b.rating - a.rating;
                    })
                    console.log(doctors)
                    setDoctorsList(doctors);
                }, (error) => {
                    console.log(error)
                }
            );
        return unsub;
    }, [])


    const renderItem = ({item, index}) => {
        if(item.empty == true){
           return <DoctorCard email = {email} id={item._id} visible={false} name={''} speciality={''} rating={''} navigation={navigation}/>
        }
        return (
            <DoctorCard email = {email} id={item._id} visible={true} name={item.name} speciality={item.speciality} rating={item.rating} navigation={navigation}/>
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
        fontWeight: "400"
    }

})

export default PopularDoctors;