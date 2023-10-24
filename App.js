import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Login';
import Dashboard from './Dashboard';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      options={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }}/>
         <Stack.Screen name="Dashboard" component={Dashboard} options={{
          headerShown: false,
        }}/>

      
    </Stack.Navigator>
  </NavigationContainer>
  );
}


