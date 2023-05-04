import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from '../Tabs';
import ProductScreen from '../screens/ProductScreen';



const Routers = () => {
    const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name="Home" component={MyTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routers

const styles = StyleSheet.create({})