import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem'
import products from '../../data/products'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
           <FlatList
           showsVerticalScrollIndicator={false}
        //    key={`${item.id}-${i}`}
           data={products}
           renderItem={({item,})=><View>
            <ProductItem item={item}/>
           </View>
        }          
        keyExtractor={({id}) => id}   />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        
    },
    
})