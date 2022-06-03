import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CenturyView } from 'react-calendar';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgicono} source={require("../src/imgs/persona-01.png")} />
      <Image style={styles.imgbella} source={require("../src/imgs/bella.png")} />
      <Text style={styles.titleText}>Bienvenida Bella,</Text>
      <Text style={styles.text}>¿Cómo te sientes hoy?</Text>
      <Image style={styles.imgedward} source={require("../src/imgs/edward.png")} />
      <View style={styles.rectangle1}></View>
      <View style={styles.rectangle2}></View>
      <View style={styles.rectangle3}></View>
      <Text style={styles.textfechas1}>4 Vie</Text>
      <Text style={styles.textEmotions1}>Meh</Text>
      <Image style={styles.imgbella2} source={require("../src/imgs/bella.png")} />
      <Text style={styles.textEmotions2}>Feliz</Text>
      <Text style={styles.textfechas2}>3 Jue</Text>
      <Text style={styles.textpost1}>El amanecer desde mi ventana ♥ </Text>
      <Image style={styles.imgamanecer} source={require("../src/imgs/amanecer.png")} />
      <Text style={styles.textEmotions3}>Triste</Text>
      <Image style={styles.imgjacob} source={require("../src/imgs/jacob.png")} />
      <Text style={styles.textfechas3}>2 Mie</Text>
      <Text style={styles.textpost2}>Mis compañeros no me ayudan con los proyectos! </Text>
    </View>     
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundImage: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    rectangle1: {
      height: '15%',
      width: '85%',
      backgroundColor: '#E1E1E1',
      position: 'absolute', 
      zIndex: 99,
      top: '25%',
      left: '7%',
      borderRadius: 25,
      zIndex: -1
    
    },

    rectangle2: {
      height: '40%',
      width: '85%',
      backgroundColor: '#E1E1E1',
      position: 'absolute', 
      zIndex: 99,
      top: '43%',
      left: '7%',
      borderRadius: 25,
      zIndex: -1
    
    },

    rectangle3: {
      height: '40%',
      width: '85%',
      backgroundColor: '#E1E1E1',
      position: 'absolute', 
      zIndex: 99,
      top: '86%',
      left: '7%',
      borderRadius: 25,
      zIndex: -1
    
    },
  
    imgedward: {
      flex: .4,
      position: 'absolute',
      top: '28%',
      right: '75%',
      width: 50,
      height: 50,
      aspectRatio: 1,
      resizeMode: 'contain',
      marginBottom: 20,
      zIndex: 2
      
    },

    imgjacob: {
      flex: .4,
      position: 'absolute',
      top: '90%',
      right: '75%',
      width: 50,
      height: 50,
      aspectRatio: 1,
      resizeMode: 'contain',
      marginBottom: 20,
      zIndex: 2
      
    },

    imgamanecer: {
      flex: .4,
      position: 'absolute',
      top: '58%',
      right: '14%',
      width: '60%',
      height: '22%',
      resizeMode: 'stretch',
      aspectRatio: 1,
      marginBottom: 20,
      zIndex: 2,
      borderRadius: 25
      
    },

    titleText: {
      fontSize: 30,
      textAlign: 'center',
      position: 'absolute',
      right: 120,
      top: 100,
      fontWeight: 'bold',
      color: '#84BCDD',
      marginBottom: 60
    },

    textEmotions1: {
      fontSize: 30,
      textAlign: 'center',
      position: 'absolute',
      right: '40%',
      top: '29%',
      fontWeight: 'bold',
      color: '#EB959B',
      marginBottom: 60
    },

    textEmotions2: {
      fontSize: 30,
      textAlign: 'center',
      position: 'absolute',
      right: '40%',
      top: '47%',
      fontWeight: 'bold',
      color: '#F4CE6C',
      marginBottom: 60
    },

    textEmotions3: {
      fontSize: 30,
      textAlign: 'center',
      position: 'absolute',
      right: '40%',
      top: '90%',
      fontWeight: 'bold',
      color: '#84BCDD',
      marginBottom: 60
    },
  
    alumnos: {
      fontSize: 40,
      fontFamily: 'Arial',
      color: 'green',
      fontStyle: 'italic'
    },
  
    text: {
      fontSize: 20,
      textAlign: 'left',
      position: 'absolute',
      right: 150,
      top: 130,
      padding: 10,
      backgroundColor: 'none',
      marginBottom: 20
    },

    textpost1: {
      fontSize: 12,
      textAlign: 'left',
      position: 'absolute',
      right: '20%',
      top: '52%',
      padding: 10,
      backgroundColor: 'none',
      marginBottom: 20
    },

    textpost2: {
      fontSize: 10,
      textAlign: 'left',
      position: 'absolute',
      right: '10%',
      top: '96%',
      padding: 10,
      backgroundColor: 'none',
      marginBottom: 20
    },

    textfechas1: {
      fontSize: 12,
      textAlign: 'left',
      position: 'absolute',
      right: '76%',
      top: '34%',
      padding: 10,
      fontWeight: 'bold',
      backgroundColor: 'none',
      marginBottom: 20
    },

    textfechas2: {
      fontSize: 12,
      textAlign: 'left',
      position: 'absolute',
      right: '76%',
      top: '52%',
      fontWeight: 'bold',
      padding: 10,
      backgroundColor: 'none',
      marginBottom: 20
    },

    textfechas3: {
      fontSize: 12,
      textAlign: 'left',
      position: 'absolute',
      right: '76%',
      top: '96%',
      fontWeight: 'bold',
      padding: 10,
      backgroundColor: 'none',
      marginBottom: 20
    },
  
    imgbella: {
      flex: .4,
      position: 'absolute',
      top: 105,
      right: 25,
      width: 50,
      height: 50,
      aspectRatio: 1,
      resizeMode: 'contain',
      marginBottom: 20
      
    },

    imgbella2: {
      flex: .4,
      position: 'absolute',
      top: '46%',
      right: '75%',
      width: 50,
      height: 50,
      aspectRatio: 1,
      resizeMode: 'contain',
      marginBottom: 20
      
    },


    imgicono: {
      textAlign: 'left',
      flex: .4,
      position: 'absolute',
      top: 50,
      width: 50,
      height: 50,
      aspectRatio: .5,
      resizeMode: 'contain',
      marginBottom: 300,
      marginRight: 300
    },
  
    icon: {
      flex: .7,
      aspectRatio: 2,
      resizeMode: 'contain',
    },
  
    boton: {
      height: 42,
      width: '19%',
      flexDirection: 'row',
      borderRadius: 20,
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 2,
      elevation: 4,
      backgroundColor: '#87BCDD',
      justifyContent: 'center',
      marginTop: 30,
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
      flexDirection: 'row',
      borderRadius: 20,
      elevation: 4,
      backgroundColor: '#87BCDD',
      justifyContent: 'center',
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 2,
      marginTop: 30,
    },
  
    botonText: {
      marginTop: 5,
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
  });