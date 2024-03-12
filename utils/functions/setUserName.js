import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUserName = async (name) => {
    try{
      await AsyncStorage.setItem("user_name", name);
    }
    catch(error)
    {
      console.log(error);
    }
  };