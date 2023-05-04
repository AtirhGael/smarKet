import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from '../Router/HomeStack';
const Tab = createMaterialBottomTabNavigator();
import { Ionicons,Entypo,AntDesign } from '@expo/vector-icons';
import ShoppingCard from '../Router/ShoppingCardStak';
import { Text,StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AddresForm from '../screens/AddresForm';


interface PropertiesProp{
  children:string;
  onPress:()=>void;
}

const MidleBtn=({children,onPress}:PropertiesProp)=>{
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{
      top:-30,
      justifyContent:'center',
      alignItems:'center',
    }}
    >
      <View style={{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#e32f45'
      }}>
        <Text> {children} </Text>
      </View>
    </TouchableOpacity>
  )
}


function MyTabs() {
  return (
    <Tab.Navigator
    activeColor="#e47911"
    inactiveColor="#ffbd7d"
    shifting={true}
    barStyle={{ 
      backgroundColor: '#fff',
      left:5,right:5,
      borderRadius:15,
  }}
    >
      <Tab.Screen
       name="Home"
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="home" size={24} color={focused? '#e47911':'#000'} />
          ),
        }}
     
      />
      <Tab.Screen
       name="AddresForm"
        component={AddresForm} 
        options={{
         
          tabBarIcon: ({ focused, color }) => (
            <View style={{
              width:30,
              height:30,
            }}>
              <AntDesign name="plus" size={24} color='#fff'/>
              <MidleBtn/>
            </View>
          ),
        }}
     
      />
      <Tab.Screen name="Settings" component={ShoppingCard}
      options={{
        tabBarLabel: 'settings',
        tabBarIcon: ({ focused, color }) => (
          <Entypo name="users" size={24}  color={focused? '#e47911':'#000'} />
        ),
      }}
    />
    </Tab.Navigator>
  );
}
export default MyTabs

const styles = StyleSheet.create({
  
})