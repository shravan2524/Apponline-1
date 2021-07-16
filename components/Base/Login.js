import React from 'react'
import { View, Text,TouchableOpacity,  TextInput, Image, StyleSheet, Button } from "react-native";
import { IoCallOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import colors from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {

    const [username, onUsername] = React.useState("");
    const [password, onPassword] = React.useState("");
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontWeight: "700", fontSize:25, textAlign: "center", marginBottom: 30}}>Login</Text>
            </View>
            <View>
                <Text style={{marginTop: 10}} >Username</Text>
                <View style={styles.flexContainer}>
                    <View>
                    <Text style={styles.colr}><BsPerson /></Text>
                    </View>
                    <View>
                    <TextInput style={styles.colr} value={username} onChangeText={onUsername} placeholder="Type Your Username" />
                    </View>
                </View>
                <Text style={{marginTop: 10}}>Password</Text>
                <View style={styles.flexContainer}>
                    <View>
                    <Text style={styles.colr}><RiLockPasswordLine /></Text>
                    </View>
                    <View>
                    <TextInput value={password} style={styles.colr} onChangeText={onPassword} placeholder="Type Your Password" />
                    </View>
                </View>
                <View style ={{flexDirection:"row-reverse", marginVertical: 10}}>
                    <Text>Forget Password ?</Text>
                </View>
                <View>
                <TouchableOpacity >
              <Text style={styles.button}>
                Login
              </Text>
            </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        margin: "auto",
        padding: 30,
        width: "100%",
        flex: 1
    },
    flexContainer: {
        display: "flex",
        flexDirection : "row",
        paddingVertical: 15,
        borderColor: "black",
        borderBottomWidth: 1,
        color: colors.gwhite,
    },
    button:{
        backgroundColor: colors.blue,
        textAlign: "center",
        color: "white",
        padding: 10,
        fontSize: 18,
        borderRadius: 5
    },
    colr:{
        color:"#838386",
        paddingRight: 10
    }
})
