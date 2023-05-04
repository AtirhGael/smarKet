import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from '../Router/HomeStack';
const Tab = createMaterialBottomTabNavigator();
import { Ionicons,Entypo } from '@expo/vector-icons';
import ShoppingCard from '../Router/ShoppingCardStak';

function MyTabs() {
  return (
    <Tab.Navigator
    activeColor="#e47911"
    inactiveColor="#ffbd7d"
    barStyle={{ backgroundColor: '#fff' }}
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