import React, {useState} from 'react';
import { TouchableOpacity,Text, View, StyleSheet, ScrollView,  SafeAreaView } from "react-native";
import Title from '../components/HomeScreen/Title';
import Visit from '../components/HomeScreen/Visit';
const DoctorUi = () => {
    const [userType, setuserType] = useState("doctor");
    return (
        <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Title name="UserName" userType = {userType} />
        </View>
        <Visit  userType = {userType} />
    </ScrollView>
    );
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

export default DoctorUi;
