import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const Appointment = (props) => {
    return (
      <View style={styles.div}>
      <Text>
        {i.Starttime} {"  -  "}
        {i.Endtime}
      </Text>
      <Pressable
        style={styles.booknow}
        onPress={() => appointmentBooking(i._id)}
      >
        <Text style={{ color: "white" }}>Book Now</Text>
      </Pressable>
      <Text style={{ fontWeight: "bold" }}>Status</Text>
    </View>
    );
}

const styles = StyleSheet.create({})

export default Appointment;
