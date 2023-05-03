import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        
    },
    root:{
        flexDirection:'row',
        marginVertical:5,
        margin:5,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:10,
        backgroundColor:'#fff',
    },
    image:{
        width:150,
        height:150,
        flex:2,
        resizeMode:'contain'
    },
    title:{
        width:"100%",
        maxWidth:'100%',
        fontSize:18
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
    right:{
        flex:3,
        padding:8,
        
    },
    rating:{
        flexDirection:'row',
        gap:2,
        alignItems:'center',
        marginVertical:5
    },
    ratingText:{
        fontSize:16
    }
})
export default styles