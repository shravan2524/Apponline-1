import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PatientCard = (props) => {
    return (
        <View>
            <Text style={styles.text}>{props.index + 1})  {props.Name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize : 17,
        paddingTop: 10,
    }
})

export default PatientCard;

