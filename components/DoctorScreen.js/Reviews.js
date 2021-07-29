import React from 'react'
import { View, Image, StyleSheet, Button } from "react-native";
import {Icon, Text} from "react-native-elements";
import colors from '../../constants/colors';
import ReviewsCard from './ReviewsCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function Reviews(props) {
    let reviews = props.reviews;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header1}>
                    <Text style={styles.header2} >
                        Reviews 
                        <Icon name="star" type="font-awesome-5" size={11} color="#F9BA04"
                        />
                        <Text style={{fontSize: 10}}>4.5(231)</Text>
                    </Text>
                </View>
                <View >
                    <Text>See all...</Text>
                </View>
            </View>
            <ScrollView horizontal={true} >
            <View style={styles.item}>
                {
                    reviews.map((x, index) => {
                        return (
                            <ReviewsCard key = {index} style={styles.card} name={x.name} stars={x.stars} desc={x.desc} />
                        )
                    })
                }
            </View>
            </ScrollView>

        </View>
    )
}
{/* <BsFillStarFill style={{ color: "#F9BA04", marginLeft : 10 }} /> */}
const styles = StyleSheet.create({
    header: {
        
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems : "baseline"
    },
    header1: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    item: {
        flexDirection: 'row',
        padding: 10,
        marginRight: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 5,
    },
    container: {
        marginTop: 20,
    },
    iconStyle:{
        width: 5,
        height: 5,
    },
    header2:{
        fontSize: 20,
    }
})
