import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ButtonProps{
    text:string;
    onPress:()=>void;
    first:boolean;
}

const Button = ({text,onPress,first}:ButtonProps) => {
    console.log(text);
    
  return (
    <View>
        <Pressable onPress={onPress} style={[styles.root,first]}>
             <Text style={styles.text}>{text}</Text>
        </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#e47911',//
        marginVertical:10,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#a15e1b'
    },
    text:{
        fontSize:18,
        fontWeight:'600'
    },
  
})