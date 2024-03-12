import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserName = async () => {
    try{
     return await AsyncStorage.getItem("user_name");
    }
    catch(error)
    {
      console.log(error);
    }
  };