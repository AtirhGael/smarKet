import { Text, View ,TextInput, Alert,KeyboardAvoidingView,Platform, ScrollView} from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Picker } from '@react-native-picker/picker'
import Button from '../../components/Buttons'


const towns = [
    {
        name:'Bamenda',
        code:123
    },
    {
        name:'Douala',
        code:124
    },
    {
        name:'Buea',
        code:12

    },
    {
        name:'limbe',
        code:1233

    },
    {
        name:'Younde',
        code:12333
    },
    {
        name:'Kumba',
        code:123333,
    },
]

const AddresForm = () => {
    const [town,setTown] = useState(towns[1].code)
    console.log(town);
    const [text, setText] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [addressError, setAddressError] = React.useState("Invalid Address");

    function oncheckout(){
        if (!text) {
            Alert.alert('enter you name ')
            
        }
        if(!!addressError){
            Alert.alert('fix all fields befor submiting')
        }
    }
    function validateAdress(){
        if(address.length < 4){
            setAddressError('address is too short')
        }
    }
    
  return (
    <KeyboardAvoidingView
    // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // keyboardVerticalOffset={Platform.OS === 'android'? 1:2}
    >
        <ScrollView  showsVerticalScrollIndicator={false}>
     <View style={styles.row}>
        <Picker
        selectedValue={town}
        onValueChange={setTown}
        >
            {towns.map((items,id)=>(
                <Picker.Item value={items.code} label={items.name}/>
            ))}
        </Picker>
     </View>
     {/* name */}
     <View style={styles.row}>
     <Text style={styles.label}> Full Name (first and last name) </Text>
     <TextInput
     placeholder='Atirh Gael'
     importantForAccessibility='no-hide-descendants'
     placeholderTextColor={'#000'}
     style={styles.textinput}
      value={text}
      onChangeText={text => setText(text)}
    />
     </View>

     {/* number */}
     <View style={styles.row}>
     <Text style={styles.label}> Enter Your Number </Text>
     <TextInput
     keyboardType='phone-pad'
     placeholder='650292489'
     placeholderTextColor={'#000'}
        style={styles.textinput}
      value={address}
      onChangeText={text => setAddress(text)}
    />
     </View>

     {/* address */}
     <View style={styles.row}>
     <Text style={styles.label}> Enter Your Address </Text>
     <TextInput
     placeholder='eg: makepe marie lumier'
     placeholderTextColor={'#000'}
        style={styles.textinput}
      value={number}
      onEndEditing={validateAdress}
      onChangeText={text => {setNumber(text); setAddressError('')}}
    />
    {!!addressError && <Text style={styles.errorLabel}> {addressError} </Text>} 
    {/* the !! cast the string to a boolean */}
     </View>
    <View>
        <Button text='Checkout' onPress={oncheckout} />
     </View>
     </ScrollView>
     </KeyboardAvoidingView>
  )
}

export default AddresForm

