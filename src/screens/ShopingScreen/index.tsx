import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import products from '../../data/cart'
import CardProductItem from '../../components/cardProductItem/index'
import Button from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native'


const ShopingScreen = () => {

    const navigation = useNavigation()

    function nav(){
        navigation.navigate('AddresForm')
    }

    const totalPrice = products.reduce((sumprice, product)=>
        sumprice+product.item.price * product.quantity,0,
    )
  return (
    <View style={styles.container}>

        <View>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Subtotal ({products.length} items): {' '}
            <Text style={{color:'#e47911'}}>{totalPrice.toFixed(2)}Frs</Text></Text>

            <Button text='Proceed To Checkout'
            first={{backgroundColor:'#f7e300',borderColor:'#e7b702'}}
            onPress={nav}/>
        </View>
           <FlatList
           showsVerticalScrollIndicator={false}
        //    key={`${item.id}-${i}`}
           data={products}
           renderItem={({item,})=><View>
            <CardProductItem cartItem={item}/>
            
           </View>
        }          
        keyExtractor={({id}) => id}   />

    </View>
  )
}

export default ShopingScreen

const styles = StyleSheet.create({
    container:{
        
    },
    
})