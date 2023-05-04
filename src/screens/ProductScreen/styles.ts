import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
    root:{
        padding:10,
        backgroundColor:'#fff'
    },
    title:{
        
    },
    price:{
        fontSize:18,
        fontWeight:'bold',
       
    },
    oldprice:{
        marginVertical:5,
        alignItems:'center',
        flexDirection:'row',
        textDecorationLine:'line-through',
        fontSize:15
    },
    description:{
        marginVertical:10,
        lineHeight:20
    }
})

export default styles