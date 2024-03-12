import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../views/homeView/homeView";
import LoginView from './../views/loginView/loginView';
import CameraScannerView from './../views/cameraScannerView/cameraScannerView';
import RegisterView from './../views/registerView/registerView';

function Navigation({ defaultScreen }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={defaultScreen} >
        <Stack.Screen
          name="homeView"
          component={HomeView}
          options={{
            headerShown: false, 
            gestureEnabled:false,
          }}
        ></Stack.Screen>
        <Stack.Screen name="loginView" component={LoginView}></Stack.Screen>
        <Stack.Screen name="registerView" component={RegisterView}></Stack.Screen>
        <Stack.Screen name="cameraScannerView" component={CameraScannerView} options={{gestureEnabled:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
