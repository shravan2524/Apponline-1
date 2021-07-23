import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import colors from "../../constants/colors";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
        <Text h1>Login</Text>
      </View>
      <View>
        <Input
          containerStyle={styles.inputContainer}
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          containerStyle={styles.inputContainer}
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ padding: 5, color: "#ffff" }} h4>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={{ padding: 5, color: colors.blue }} h4>
          Register
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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
});
