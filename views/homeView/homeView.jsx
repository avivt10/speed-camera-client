import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform
} from "react-native"; 
import { useNavigation } from '@react-navigation/native';

const HomeView = () => {
  const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View>
            <Image source={require("../../assets/icon_camera.png")} style={styles.icon} resizeMode="contain" />
        </View>
        <View style={styles.header}>
          <Text style={styles.textHeader}> Speed Camera </Text>
        </View>
          
        <View style={styles.buttonsContainer}>
        <View style={styles.btnLogin}>
              <TouchableOpacity
              onPress={() => navigation.navigate("loginView")}
              style={styles.button}
              >
          <Text style={styles.buttonText}>  Login </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRegister}>
              <TouchableOpacity
              onPress={() => navigation.navigate("registerView")}
              style={[styles.button,styles.buttonOutline]}
              >
          <Text style={styles.buttonText}>  Register </Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    );
  };
export default HomeView;

const styles = StyleSheet.create({
  container:{
    height:"100%",
    display:"flex",
    flexDirection:"column",
    backgroundColor:"white",
  },
  icon:{
    height: Platform.OS === "web" ? 500 : 150,
    top: Platform.OS === "android" || Platform.OS === "ios" ? 50 : null,
    alignSelf: "center",
  },
  header:{
    display:"flex",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:100
  },
  textHeader:{
    fontSize:20,
    fontStyle:"italic",
    fontWeight:"bold",
  },
  buttonsContainer:{
    marginTop:100,
    marginLeft:"auto",
    marginRight:"auto",
    width:Platform.OS === "android" || Platform.OS === "ios" ? "100%" : "45%",
  },
  btnLogin:{
    borderRadius:15,
    marginBottom:25,
    backgroundColor:'#0782F9',
  },
  btnRegister:{
    borderRadius:15,
    backgroundColor:'#0782F9',
  },
    buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16,
    textAlign:"center",
  },
  button:{
    backgroundColor:"#0782F9",
    borderRadius:15,
    padding:10,
  },
    buttonOutline:{
    borderColor:'red',
  },
})
