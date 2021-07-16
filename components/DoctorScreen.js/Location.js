import React from 'react'
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { IoCallOutline } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import colors from '../../constants/colors';
import { Dimensions } from 'react-native';

export default function Location(props) {

    return (
        <View style = {{marginTop : 10}}>
            <View>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                }}>
                    Location
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.item}>
                        <HiLocationMarker style={{color: colors.blue,fontSize: 30}} />
                    </View>
                    <View style={styles.container2}>
                        <View style={{fontSize: 18,
                        fontWeight: '500'}}>
                            {props.clinic}
                        </View>
                        <View style={{fontSize: 14}}>
                            {props.address}
                        </View>
                        <View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    item: {
        padding: 15,
        borderRadius: "100%",
        backgroundColor : colors.llblue
    },
    container1: {
        flexDirection: "row",
        marginTop : 10
    },
    container2: {
        flexDirection: "column",
        padding: 10,
        marginLeft : 20
    }
})