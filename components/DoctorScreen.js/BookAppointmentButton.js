import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { View, Text, Modal, Alert, Pressable } from "react-native";

const BookAppointmentButton = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.book} >
            
            <Text style={{ fontWeight: 600, fontSize: 17, }} >
                Book Appointment
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    book: {
        width: '100%',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white',
        position: 'fixed',
        bottom: '1px',
        textAlign: 'center',
        shadowColor: '#A9A9A9',
        shadowOffset: { width: 0, height: -6 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

export default BookAppointmentButton;
