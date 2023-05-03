import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import product from '../../../data/product'
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../../components/QuantitySelector';
import Button from '../../../components/Buttons';
import ImageCrrousel from '../../../components/ImageCarrosel';

const ProductScreen = () => {
    const [quantity,setQuantity] = useState(1)
    
    const [selected , setSelected] = useState(product.options?product.options[0]:null)
    console.log(selected);
    
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    >
    <View style={styles.root}>
        <Text style={styles.title}> {product.title} </Text>

        <ImageCrrousel images={product.images}/>
                <Picker
                 selectedValue={selected}
                 onValueChange={(itemValue) =>
                    setSelected(itemValue)}
                >
                    {product.options.map((options)=>( <Picker.Item label={options} value={options} />))}
                </Picker>

            <View >
              <Text style={styles.price}>from ${product.price} </Text>

              {product.oldPrice && (
                  
                <Text style={styles.oldprice}>${product.oldPrice}</Text>
                )}
                <Text style={styles.description}>{product.description}</Text>
          </View>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

          <Button first={{backgroundColor:'#e3c905'}} text={'Add To Card'} onPress={()=>console.log('add to card')
          } />
          <Button text={'Buy Now'} onPress={()=>console.log('buy now')
          } />
    </View>
    </ScrollView>
  )
}

export default ProductScreen

