import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginView = () => {
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerLog}> Login</Text>
        <Text style={styles.headerDet}> Please login to your account </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="phone" />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnLogin}>
          <TouchableOpacity title="">
          <Text style={styles.btnTextLogin}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "80%",
    marginTop: 200,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  headerLog: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerDet: {
    fontSize: 15,
  },
  inputContainer: {
    marginTop: 25,
  },
  textInput: {
    height: 40,
    width: "100%",
    margin: 12,
    marginRight: "auto",
    marginLeft: "auto",
    borderWidth: 1,
    padding: 10,
    textAlign: "left",
  },
  btnLogin: {
    height: 55,
    width: "100%",
    backgroundColor: "#3498db",
    display: "flex",
    justifyContent: "center",
  },
  btnTextLogin: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
