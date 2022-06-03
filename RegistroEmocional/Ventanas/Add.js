import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CenturyView } from 'react-calendar';


export default function Add({ navigation }) {

return (
  <View style={styles.container}>
    <Text style={styles.titleText}>Entrada Diaria</Text>
      <Image
        style={styles.imganimo}
        source={require("../src/imgs/animo.png")}
      />
  
  
    <TextInput style={styles.textInputBox} placeholder="Escribe lo que sientas..."  />
    
   

    <TouchableOpacity style={styles.boton3}>
      <Image
        style={styles.imgmas}
        source={require("../src/imgs/mas.png")}
      />
    </TouchableOpacity>

    <View style={styles.rectangle1}></View>
   
  </View>     
);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(#F38D88, #CCAAD5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rectangle1: {
    height: '10%',
    width: '70%',
    backgroundColor: 'white',
    position: 'absolute', 
    zIndex: 99,
    top: '43%',
    left: '15%',
    borderRadius: 25,
    zIndex: -1
  
  },

  titleText: {
    fontSize: 60,
    textAlign: 'center',
    top: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 150,
    lineHeight: '100%'
  },

  alumnos: {
    fontSize: 40,
    fontFamily: 'Arial',
    color: 'green',
    fontStyle: 'italic'
  },

  text: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    height: '15%'
  },

  textInputBox: {
    fontSize: 20,
    padding: 10,
    paddingBottom: '10%',
    backgroundColor: 'white',
    marginBottom: 20,
    height: '15%'
  },

  img: {
    flex: .4,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 20
  },

  imganimo: {
    flex: 1,
    width: '60%',
    height: '60%',
    position: 'absolute',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 20,
    bottom: 150

    
  },

  imgmas: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
    top: 10,
    width: '50%',
    height: '50%',

  },

  boton: {
    height: 42,
    width: '49%',
    flexDirection: 'row',
    borderRadius: 15,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: 'white',

    justifyContent: 'center',
    marginBottom: 100,
  },

  boton2: {
    height: 42,
    width: '19%',
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 4,
    border: '2px solid white' ,
    justifyContent: 'center',
    marginTop: 30,
  },

  boton3: {
    height: 42,
    width: 42,
    textAlign: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 4,
    backgroundColor: '#87BCDD',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },

  botonText: {
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});