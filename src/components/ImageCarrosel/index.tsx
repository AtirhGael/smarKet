import { FlatList, StyleSheet, Image, View, useWindowDimensions } from 'react-native'
import React, { useState,useCallback } from 'react'

interface carouselProp{
    images:string[];
}

const ImageCrrousel = ({ images}:carouselProp) => {
    const windowWidth = useWindowDimensions().width
    const [active, setActive] = useState(1);

    // const onFlatlistUpdate = useCallback(({viewableItems}) =>{
    //     if(viewableItems.lenght > 0){
    //         setActive(viewableItems[0].index || 0);
    //     }
    //     console.log(viewableItems);
    //   },[]);
    //   const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  return (
    
    <View style={styles.root}>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={windowWidth-20}
      snapToAlignment={'center'}
      decelerationRate={'fast'}
      data={images}
      renderItem={({item})=>(
        <Image style={[styles.image,{width:windowWidth-40}]} source={{uri:item}}/>
      )}
    //   viewabilityConfig={viewConfigRef.current}
    //   onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={styles.dotcontainer}>
      {images.map((image,index)=>(
        <View style={[styles.dot,{
            backgroundColor: index===active? '#ededed':'#c9c9c9'
        }]}
        
        />
      ))}
      </View>
    </View>
  )
}

export default ImageCrrousel

const styles = StyleSheet.create({
    image:{
        height:250,
        margin:10,
        resizeMode:'stretch'
    },
    root:{

    },
    dot:{
        width:10,
        height:10,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#c9c9c9',
        margin:5,
        backgroundColor:'#ededed'
    },
    dotcontainer:{
        flexDirection:'row',
        justifyContent:'center'
    }
})   