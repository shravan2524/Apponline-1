import React from "react"
// import colors from '../constants/colors'
import { Text, View, StyleSheet } from "react-native";
import VisitCard from "./VisitCard";

const Visit = () => {
    return (
        <View style={styles.container}>
            <VisitCard name="Clinic visit" description="Make an Appointment"/>
            <VisitCard name="Home visit" description="Call the doctor home"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingHorizontal: 2,
    },
    visitCard:{
        flex: 1,
        height: 180,
        backgroundColor: '#6b5dd0',
        marginHorizontal: 7,
        borderRadius: 10
    }

})

export default Visit;