import { View, Text, Pressable ,StyleSheet} from 'react-native'
import React, { useState } from 'react'



const QuantitySelector = ({quantity, setQuantity}) => {
    

    const minus=()=>{
        setQuantity(Math.max(0, quantity-1))
    }
    const plus=()=>{
        setQuantity(quantity+1)
    }
  return (
    <View style={styles.root}>
      <Pressable onPress={minus} style={styles.btn}>
            <Text style={styles.btnText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>
      
      <Pressable onPress={plus} style={styles.btn}>
             <Text style={styles.btnText}>+</Text>
      </Pressable>
    </View>
  )
}

export default QuantitySelector

const styles = StyleSheet.create({
root:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:'#e3e3e3',
    width:100,
},
btn:{
    width:35,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#d1d1d1'

},
btnText:{
    fontSize:18
},
quantity:{
    color:'#007eb9'
}
})