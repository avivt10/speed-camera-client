import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ValidatePhone, validatePassword } from "../../utils/validations/validations";
import axios from "axios";
import { setToken } from "../../utils/functions/setToken";
import { setUserName } from './../../utils/functions/setUserName';

const LoginView = () => {
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [show, setShow] = useState(false);
  const navigation = useNavigation();
  let SendDataToServer = async () => {
    let data = {
      Phone: phone,
      Password: password,
    };
    try {
      const res = await axios.post(
        "http://192.168.7.14:3000/auth/login",
        data
      );
         setToken(res.data.token)
         setUserName(res.data.FirstName)
         setTimeout(() => {
           navigation.navigate("cameraScannerView");
          }, 5000),
           setShow(true);
    } catch (err) {
      alert(err.response.data);
    }
  };

  const handleLogin = () =>{ 
    const isValid = ValidatePhone(phone) && validatePassword(password)
    isValid ? SendDataToServer() : alert("One or more of the details are incorrect, try again!")
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerLog}> Login</Text>
        <Text style={styles.headerDet}> Please login to your account </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="phone" onChangeText={setPhone} />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.btnLogin}>
          <TouchableOpacity title="" onPress={handleLogin}>
          <Text style={styles.btnTextLogin}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ActivityIndicator size="large" animating={show} />
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
