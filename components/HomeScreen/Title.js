
import React from "react";

import {View, StyleSheet, Text} from "react-native";

import { Icon } from 'react-native-eva-icons';
import { auth } from "../../Firebase";

function Title(props){
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Hi, {auth?.currentUser?.displayName}</Text>
            
            <Icon name='github' fill='red'width={48} height={48}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    headerText:{
        color: 'black',
        fontSize: 30,
    }
})

export default Title;