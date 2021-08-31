import React, { useState } from "react";

import { Text, View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Timeline1 = (props) => {
    const {timeline, setTimeline} = props;
    return (
      <View style={styles.container}>
        <Text
          style={timeline == 0 ? [styles.item, styles.itemSelected] : [styles.item]}
          onPress = {() => setTimeline(0)}
        >
          Upcoming
        </Text>
        <Text
          style={timeline == 1 ? [styles.item, styles.itemSelected] : [styles.item]}
          onPress = {() => setTimeline(1)}
        >
          Completed
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.gwhite,
      marginHorizontal: 4,
      borderRadius: 5,
    },
    item: {
      flex: 1,
      paddingVertical: 15,
      justifyContent: "center",
      textAlign: "center",
      color: colors.dwhite,
    },
    itemSelected: {
      backgroundColor: colors.blue,
      color: "#fff",
      borderRadius: 10,
    },
  });

export default Timeline1;
