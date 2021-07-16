import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import { IoCallOutline } from "react-icons/io5";
import { BsFillChatDotsFill } from "react-icons/bs";
import colors from '../../constants/colors';


export default function Info(props) {
    return (
        <View>
             <View>
                 <Text style={{
                     fontSize:18,
                     fontWeight:'500',
                 }}>About Doctor</Text>
                 <Text style={{
                     fontSize:16
                 }}> {props.about}</Text>
             </View>
        </View>
    )
}
