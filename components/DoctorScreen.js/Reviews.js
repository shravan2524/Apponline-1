import React from 'react'
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { IoCallOutline } from "react-icons/io5";
import { BsFillStarFill } from "react-icons/bs";
import colors from '../../constants/colors';
import ReviewsCard from './ReviewsCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function Reviews(props) {
    let reviews = props.reviews;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header1}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                    }}>
                        Reviews
                    </Text>
                    <Text>
                        <BsFillStarFill style={{ color: "#F9BA04", marginLeft : 10 }} />
                        4.5(231)
                    </Text>
                </View>
                <View >
                    <Text>See all...</Text>
                </View>
            </View>
            <ScrollView horizontal={true} >
            <View style={styles.item}>
                {
                    reviews.map(x => {
                        return (
                            <ReviewsCard style={styles.card} name={x.name} stars={x.stars} desc={x.desc} />
                        )
                    })
                }
            </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        
        flex: "1",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems : "baseline"
    },
    header1: {
        flex: "1",
        flexDirection: "row",
        alignItems : "baseline"
    },
    item: {
        flexDirection: 'row',
        rowGap: 2,
        padding: 10,
        marginRight: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 5,
    },
    container: {
        marginTop: 20,
    }

})
