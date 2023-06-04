import React from "react";
import Config from "react-native-config";
import { View,Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import Meals from "./Pages/Meals/Meals";
import Categories from "./Pages/Categories/Categories";
import Details from "./Pages/Details/Details";
function App () {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Categories"  component={Categories} options={{
    headerStyle: {backgroundColor: 'white'},
    headerTitleStyle: {color:'darkorange'} }}/>
        
        <Stack.Screen name="Meals" component={Meals}  options={{
    headerStyle: {backgroundColor: 'white'},
    headerTitleStyle: {color:'darkorange'} }} />
       
        <Stack.Screen name="Details" component={Details}  options={{
    headerStyle: {backgroundColor: 'white'},
    headerTitleStyle: {color:'darkorange'} }}/>
      
      
      </Stack.Navigator>


    </NavigationContainer>
    



  )
}

export default App;