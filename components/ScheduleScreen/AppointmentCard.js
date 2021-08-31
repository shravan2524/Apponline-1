import React, {useState, useEffect} from 'react';
import { Row } from 'react-bootstrap';
import { View, StyleSheet, Text, Pressable, Alert, Modal } from 'react-native';
import colors from '../../constants/colors';
import PatientList from '../Modals/PatientList';
const AppointmentCard = (props) => {
    const { schedulesDate, schedulesstime, patients, schedulesetime } = props;
    console.log("schedulesDate", schedulesDate);

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container1} >
            <View style={styles.container}>
                <Text>{schedulesDate}</Text>
                <View style={styles.container2}>
                    <Text>{schedulesstime}  -  </Text>
                    <Text>{schedulesetime}</Text>
                </View>
            </View>
            <View style={styles.container3}>
                <Pressable onPress={() => setModalVisible(true)} style={styles.btn}><Text>More..</Text></Pressable>
            </View>
            <Modal
                style={{ backgroundColor: "grey" }}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View>
                    <PatientList schedulesDate={schedulesDate} schedulesetime={schedulesetime} schedulesstime={schedulesstime} patients={patients} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container1: {
        borderWidth: 0.2,
        borderColor: colors.lblue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 12,
        marginVertical: 10,
        borderRadius: 5,
    },
    container2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    container3: {
        flex: 1,
        flexDirection: "row",
        // backgroundColor : "purple",
        justifyContent: "flex-end",
    },
    btn: {
        backgroundColor: colors.lstar,
        borderColor: colors.star,
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,

    }

})

export default AppointmentCard;
