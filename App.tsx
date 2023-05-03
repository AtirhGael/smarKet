import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/HomeScreen/ProductScreen';

export default function App() {
  return (
    
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <ProductScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop:25,
   margin:10
  },
});
