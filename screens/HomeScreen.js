import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PopularDoctors from '../components/HomeScreen/PopularDoctors';
import Symptoms from '../components/HomeScreen/Symptoms';
import Title from '../components/HomeScreen/Title';
import Visit from '../components/HomeScreen/Visit';

/*
*   Name
*   Clinic or Home visit
*   symptoms
*   Popular Doctors
*       
*/
function HomeScreen({ route, navigation }) {
    const {email} = route.params;
    // let email = "asdfad";
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Title name="UserName" />
            </View>
            <Visit/>
            <Symptoms />
            <PopularDoctors email = {email} navigation={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingVertical: 36,
        paddingHorizontal: 10,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    body:{
        flex: 1,
        height: 10
    },
    bottom:{
        height: 40
    },
    container:{
        backgroundColor: '#fff'
    }
})

export default HomeScreen;