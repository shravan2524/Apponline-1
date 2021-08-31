import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import colors from '../../constants/colors';
import Newspaper from './Newspaper';

const CurrentNews = () => {
    const [news, setnews] = useState([]);
    useEffect(() => {
        // var url = 
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=61d02d059a5946389d24770051662262')
        .then((response) => response.json())
        .then((json) => {
        //   console.log(json.articles);
          setnews(json.articles);
        //   setnews(news.slice(1, 2));
          console.log("News array", news);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.text}>
                <Text style={{color: "white" , fontSize: 20}}>NEWS</Text>
            </View>
            {
                news?
                news.map((x, i) => {
                   return (
                       <Newspaper key={i} title={x.title} imageUrl={x.urlToImage} desc={x.description} />
                   )
               })
               : 0
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop : 20,
    },
    text:{
        flex: 1,
        paddingVertical: 12,
        backgroundColor: colors.blue,
        alignItems: "center",
    }
})

export default CurrentNews;
