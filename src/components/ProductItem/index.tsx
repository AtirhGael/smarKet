import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ProductItemProp{
    item:{
        id:string;
        title:string;
        image:string;
        avgRating:number;
        ratings:number;
        price:number;
        oldPrice?:number;
    };
}


const ProductItem = (props:ProductItemProp) => {

  const navigation = useNavigation()

  const {item} =props 

  function pressable(){
    console.log('pres breast');
    navigation.navigate('prodcuctScreen',{id:item.id})
  }
  return (
    <View style={styles.container}>
    <Pressable onPress={pressable} style={styles.root} >
      <Image style={styles.image} source={{uri:item.image}}/>
      <View style={styles.right} >
          <Text style={styles.title} numberOfLines={3}> {item.title} </Text>
          <View style={styles.rating} >

          {[0,0,0,0,0].map((el,ind)=> <FontAwesome
           name={ind < Math.floor(item.avgRating)?"star":'star-o'}
           size={18} 
           color="#e47911" 
           />)}
          
         
          <Text style={styles.ratingText}> {item.ratings} </Text>
          </View>
          <View style={{flexDirection:'row',gap:2,alignItems:'center'}}>
              <Text style={styles.price}>from ${item.price} </Text>

              {item.oldPrice && (
                  
                <Text style={styles.oldprice}>${item.oldPrice}</Text>
              )}
          </View>
         
      </View>
    </Pressable>

  </View>
  )
}

export default ProductItem

