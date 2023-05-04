import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Foundation,Ionicons,FontAwesome5,FontAwesome,AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

interface SearchValueProps{
    searchValue:string;
    setSearchValue:()=>void;
}

const HeaderComponent=({searchValue,setSearchValue}:SearchValueProps)=>{

    return (
        <SafeAreaView style={{backgroundColor:'#22e3dd'}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:5,bottom:10,}}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>
                    SmarKet
                </Text>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:15,right:5}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:1}}>
                        <Text style={{fontSize:20}}> Atirh </Text>
                        <Ionicons name="person" size={30} color="black" />
                    </View>
                    <Foundation name="shopping-cart" size={30} color="black" />
                </View>
            </View>
           
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
            placeholder='search on SmarKet...'
            placeholderTextColor={'#000'}
            value={searchValue}
            onChangeText={setSearchValue}
            />

            </View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
            <View style={{flexDirection:'row',gap:15,paddingBottom:5}}>
                <Text style={{color:'#000',fontSize:18,fontWeight:'600'}}> fashion <Ionicons name="woman-sharp" size={16} color="black" /> </Text>
                <Text style={{color:'#000',fontSize:18,fontWeight:'600'}}> electronics <FontAwesome name="tv" size={16} color="black" /> </Text>
                <Text style={{color:'#000',fontSize:18,fontWeight:'600'}}>Services <AntDesign name="customerservice" size={16} color="black" /> </Text>
                <Text style={{color:'#000',fontSize:18,fontWeight:'600'}}>Hair <AntDesign name="customerservice" size={16} color="black" /> </Text>
                <Text style={{color:'#000',fontSize:18,fontWeight:'600'}}>Shoes <AntDesign name="customerservice" size={16} color="black" /> </Text>
            </View>
            </ScrollView>
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
            options={{title:'Products Detail' }}/>
        </Stack.Navigator>
        </SafeAreaView>
  )
}

export default HomeStack

const styles = StyleSheet.create({})