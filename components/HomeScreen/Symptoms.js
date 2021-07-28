import React from "react"

import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-eva-icons";
import colors from "../../constants/colors";

const Symptoms = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>What are your Symptoms ?</Text>
            <ScrollView horizontal={true} style={styles.scrollContainer}>
                <View style={styles.item}>
                    <View style={{marginRight: 5}}>
                        <Text>Temperature</Text>
                    </View>
                    <Icon name="thermometer-outline" fill={colors.lblue} width={20} height={20}/>
                </View>
                <View style={styles.item}>
                    <View style={{marginRight: 5}}>
                        <Text>Temperature</Text>
                    </View>
                    <Icon name="thermometer-outline" fill={colors.lblue} width={20} height={20}/>
                </View>
                <View style={styles.item}>
                    <View style={{marginRight: 5}}>
                        <Text>Temperature</Text>
                    </View>
                    <Icon name="thermometer-outline" fill={colors.lblue} width={20} height={20}/>
                </View>
                <View style={styles.item}>
                    <View style={{marginRight: 5}}>
                        <Text>Temperature</Text>
                    </View>
                    <Icon name="thermometer-outline" fill={colors.lblue} width={20} height={20}/>
                </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        margin: 20,
    },

    headerText:{
        color: 'black',
        fontSize: 25,
        fontWeight: "400"
    },
    scrollContainer:{
        marginTop: 10,
        height: 40,
    },
    item:{
        flexDirection: 'row',
        rowGap: 2,
        backgroundColor: colors.hwhite,
        padding: 10 ,
        marginRight: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 5,    
    }


})

export default Symptoms;