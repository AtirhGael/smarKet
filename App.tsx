import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Routers from './src/Router/indext';
// import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
 
    <View style={styles.container}>
      <Routers/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
   margin:1
  },
});
