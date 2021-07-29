import React from "react"

import { Text, View, StyleSheet } from "react-native";
import { Icon } from 'react-native-eva-icons';
import colors from "../../constants/colors";

const VisitCard = (props) => {
    let iconName = props.name=="Clinic visit"?"plus-circle-outline":"home-outline";
    return (
        <View style={styles.container}>
            <Icon name={iconName} fill={'#fff'} width={48} height={48}/>
            <View>
                <Text style={styles.textTitle}>{props.name}</Text>
                <Text style={styles.textDescription}>{props.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        height: 180,
        backgroundColor: colors.blue,
        marginHorizontal: 7,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    textTitle:{
        fontSize: 20,
        fontWeight: "bold",
        color: colors.hwhite

    },
    textDescription:{
        fontSize: 12,
        fontWeight: "400",
        color: colors.hwhite
    }

})
export default VisitCard;