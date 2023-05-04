import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

interface SearchValueProps{
    searchValue:string;
    setSearchValue:()=>void;
}

const HeaderComponent=({searchValue,setSearchValue}:SearchValueProps)=>{
    
    return (
        <SafeAreaView style={{backgroundColor:'#22e3dd'}}>
            <View style={{
                backgroundColor:'#fff',
                margin:10,
                borderRadius:25,
                borderWidth:2,
                padding:5,
                flexDirection:'row',
                alignItems:'center',
                gap:8
            }} >
                <FontAwesome5 name="search" size={24} color="black" />
            <TextInput
            style={{height:40,width:'90%'}}
            placeholder='search...'
            placeholderTextColor={'#000'}
            value={searchValue}
            onChangeText={setSearchValue}
            />

            </View>
        </SafeAreaView>
    )
}

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    const [searchValue, setSearchValue] = useState()
  return (
    <SafeAreaView style={{flex:1}}>
        <Stack.Navigator
        screenOptions={{
           header:()=><HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}  />
   
        }}
        >
            <Stack.Screen name="HomeScreen" options={{title:'Home' }}  >
               {()=> <HomeScreen searchValue={searchValue}/>}
            </Stack.Screen>
            <Stack.Screen name="prodcuctScreen" component={ProductScreen} 
            options={{title:'Home' }}/>
        </Stack.Navigator>
        </SafeAreaView>
  )
}

export default HomeStack

const styles = StyleSheet.create({})