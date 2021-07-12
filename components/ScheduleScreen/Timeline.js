import React from "react"

import { Text, View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Timeline = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.item,styles.itemSelected]}>Upcoming</Text>
            <Text style={styles.item}>Completed</Text>
            <Text style={styles.item}>Canceled</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gwhite,
        marginHorizontal: 4,
        borderRadius: 5
    },
    item:{
        flex: 1,
        paddingVertical: 15,
        justifyContent: 'center',
        textAlign: 'center',
        color: colors.dwhite,        
    },
    itemSelected:{
        backgroundColor: colors.blue,
        color: '#fff',
        borderRadius: 10,
    }
})

export default Timeline;