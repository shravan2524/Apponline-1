import React from 'react';
import { useEffect, useState } from 'react';
import {View, StyleSheet, Image,  Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import colors from '../../constants/colors';

const Newspaper = ({title, imageUrl, desc}) => {
    const [description, setdescription] = useState(desc)
    // var description = desc;
    // desc = desc.slice(1, 10);
    useEffect(() => {
        console.log(description);
    }, [])
    return (
        <View style={styles.container} >
                <View style={styles.container1}>
                    <Image 
                        style={{
                            flex: 1,
                    resizeMode: "cover",
                    height: 80,
                    width: 50,
                        }}
                        source={{uri : imageUrl}}
                    />
                <Text style={styles.text}>{title}</Text>
                </View>
                <View>
                    <Text>
                        {desc}
                    </Text>
                </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        padding : 10,
        borderColor: colors.lblue,
        borderRadius: 4,
        borderWidth : 1,
    },
    container1:{
        flex : 1,
        flexDirection : 'row',
    },
    text:{
        width : 250,
        color : colors.lblue,
        fontWeight : "bold",
        paddingHorizontal: 20,
    }



})

export default Newspaper;
