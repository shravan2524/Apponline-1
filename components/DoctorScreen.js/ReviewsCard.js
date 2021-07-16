import React from 'react';
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { IoCallOutline } from "react-icons/io5";
import { BsFillStarFill } from "react-icons/bs";
import colors from '../../constants/colors';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width - 140;
const windowHeight = Dimensions.get('window').height;


export default function ReviewsCard(props) {
    
    return (
        <View style={styles.item}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginEnd: 10}}>
                <Text>{props.name}  </Text>
                  <Text style = {styles.item1}><BsFillStarFill style={{ color: "#F9BA04" }} /> {props.stars}</Text>
            </View>
            <View >{props.desc}</View>
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        maxWidth : windowWidth,
        minWidth: windowWidth,
        borderWidth: 1,
        borderColor: "#ECEBE5",
        padding: 10,
        borderRadius: 5,   
        marginEnd: 10,
        shadowColor: colors.hwhite,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 15,  
        elevation: 5
    },
    item1:{
        backgroundColor:colors.lstar    ,
        borderColor: colors.star,
        borderWidth : 1,
        borderRadius: 10,
        paddingHorizontal: 5
    }
})
