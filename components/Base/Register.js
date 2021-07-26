import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import "react-native-vector-icons";
import colors from "../../constants/colors";
import { Input, Text, CheckBox } from "react-native-elements";
import { auth } from "../../Firebase";
import { NavigationContainer } from "@react-navigation/native";
import { db } from "../../Firebase";

export default function Register({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState("Doctor")

  const registerUser = async () => {
    console.log("pressed");
    console.log(type);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          type : type,
        })
        alert("User Registered Successfully");
        navigation.navigate("Login")
      })
      .catch(err => console.log(err))


      await db
      .collection("users")
      .add({
        Name : name,
        Email : email,
        Password : password,
        Type : type,
      })


  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text h1>Register</Text>
      </View>
      <View>
        <Input
          containerStyle={styles.inputContainer}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          containerStyle={styles.inputContainer}
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          containerStyle={styles.inputContainer}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          containerStyle={styles.inputContainer}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <View style={styles.typeGroup}>
          <CheckBox
            title="Doctor"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={!type}
            onPress={() => setType("Doctor")}
          />
          <CheckBox
            title="Patient"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={!type}
            onPress={() => setType("Patient")}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={registerUser}>
        <Text style={{ padding: 5, color: "#ffff" }} h4>
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => navigation.navigate("Login")}>
        <Text style={{ padding: 5, color: colors.blue }} h4>
          Login
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    margin: 5,
  },
  button: {
    width: 200,
    marginTop: 10,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.blue,
    color: colors.blue,
  },
  typeGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
