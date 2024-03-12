import React, { useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet, TextInput, ActivityIndicator, TouchableOpacity  } from 'react-native'

const RegisterView = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [show, setShow] = useState(false);

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
        <TouchableOpacity title="">
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

