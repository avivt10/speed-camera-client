import React, { useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet, TextInput, ActivityIndicator, TouchableOpacity  } from 'react-native'
import { setUserName } from './../../utils/functions/setUserName';
import { setToken } from './../../utils/functions/setToken';
import { useNavigation } from '@react-navigation/native';
import { ValidatePhone, validateFirstName, validateLastName, validatePassword } from './../../utils/validations/validations';
import axios from 'axios';

const RegisterView = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [show, setShow] = useState(false);
  const navigation = useNavigation();

  let SendDataToServer = async () => {
    let data = {
      FirstName: firstName,
      LastName: lastName,
      Phone: phoneNumber,
      Password: password,
    };
    try {
      const res = await axios.post(
        "http://192.168.7.14:3000/auth/register",
        data
      );
         setToken(res.data.token)
         setUserName(firstName)
         setTimeout(() => {
           navigation.navigate("cameraScannerView");
          }, 5000),
           setShow(true);
    } catch (err) {
      alert(err.response.data);
    }
  };

  const handleRegister = () =>{ 
    const isValid = validateFirstName(firstName) && validateLastName(lastName) && ValidatePhone(phoneNumber) && validatePassword(password)
    isValid ? SendDataToServer() : alert("One or more of the details are incorrect, try again!")
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerReg}> Register</Text>
        <Text style={styles.headerDet}> Please enter details to register </Text>
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='firstName' onChangeText={setFirstName}/>
        <TextInput style={styles.textInput} placeholder='lastName' onChangeText={setLastName}/>
        <TextInput style={styles.textInput} placeholder='phone' onChangeText={setPhoneNumber}/>
        <TextInput style={styles.textInput} placeholder='password' onChangeText={setPassword} secureTextEntry={true}/>
        </View>
        <View style={styles.btnRegister}>
        <TouchableOpacity title="" onPress={handleRegister}>
        <Text style={styles.btnTextRegister}> Register </Text>
        </TouchableOpacity>
        </View>
      </View>
      <ActivityIndicator size="large" animating={show} />
    </SafeAreaView>
  )
}
export default RegisterView;

const styles = StyleSheet.create({
  container:{
    display:"flex",
    width:"80%",
    marginTop:200,
    marginLeft:"auto",
    marginRight:"auto",
    padding:10
  },
  headerReg:{
    fontSize:30,
    fontWeight:"bold"
  },
  headerDet:{
    fontSize:15
  },
  inputContainer:{
    marginTop:25,
  },
  textInput:{
    height: 40,
    width:"100%",
    margin: 12,
    marginRight:"auto",
    marginLeft:"auto",
    borderWidth: 1,
    padding: 10,
    textAlign: 'left'
  },
  btnRegister:{
    height: 55,
    width: "100%",
    backgroundColor: "#3498db",
    display: "flex",
    justifyContent: "center",
  },
  btnTextRegister:{
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  }

})

