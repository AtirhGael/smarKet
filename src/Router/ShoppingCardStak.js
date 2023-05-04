import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopingScreen from '../screens/ShopingScreen';
import AddresForm from '../screens/AddresForm';


const ShoppingCard = () => {
    const Stack = createNativeStackNavigator();
    
  return (
    
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name="ShopingScreen" component={ShopingScreen}
            options={{title:'Shoping Card'}}
             />
            <Stack.Screen name="AddresForm" component={AddresForm}
            options={{title:'Address Screen'}}
             />
        </Stack.Navigator>
    
  )
}

export default ShoppingCard

const styles = StyleSheet.create({})