import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../src/imgs/loginicon.png")} />
      <Text style={styles.titleText}>Registro Emocional</Text>
      <TextInput placeholder="Usuario" style={styles.text} />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={styles.text}
      />
      <TouchableOpacity
        style={[styles.boton]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.botonText]}>Ingresar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.boton2]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.botonText]}>Crear Cuenta</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  
  
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(#F38D88, #CCAAD5)",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: "bold",
    color: "white",
    marginBottom: 60,
  },

  alumnos: {
    fontSize: 40,
    fontFamily: "Arial",
    color: "green",
    fontStyle: "italic",
  },

  text: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },

  img: {
    flex: 0.4,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 20,
  },

  icon: {
    flex: 0.7,
    aspectRatio: 2,
    resizeMode: "contain",
  },

  boton: {
    height: 42,
    width: "25%",
    flexDirection: "row",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: "#87BCDD",
    justifyContent: "center",
    marginTop: 30,
  },

  boton2: {
    height: 42,
    width: "50%",
    flexDirection: "row",
    borderRadius: 20,
    elevation: 4,
    border: "2px solid white",
    justifyContent: "center",
    marginTop: 30,
  },

  boton3: {
    height: 42,
    width: 42,
    flexDirection: "row",
    borderRadius: 20,
    elevation: 4,
    backgroundColor: "#87BCDD",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginTop: 30,
  },

  botonText: {
    marginTop: 5,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
