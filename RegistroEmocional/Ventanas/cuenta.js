import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../src/imgs/koinobori.png")} />
      <Text style={styles.titleText}>Bella Swan</Text>

      <TouchableOpacity
        style={[styles.boton2]}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={[styles.botonText]}>Mi información</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.boton2]}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={[styles.botonText]}>Soporte</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton2]}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={[styles.botonText]}>Legal</Text>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={[styles.boton2]}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={[styles.botonText]}>Cambiar tema</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton]}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={[styles.botonText2]}>Cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton3]}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={[styles.botonText2]}>Cerrar sesión</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#87BCDD",
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
    width: "19%",
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
    width: "19%",
    flexDirection: "row",
    borderRadius: 20,
    elevation: 4,
    border: "2px #87BCDD",
    justifyContent: "center",
    marginTop: 30,
  },

  boton3: {
    height: 42,
    width: "19%",
    flexDirection: "row",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: "#FF6868",
    justifyContent: "center",
    marginTop: 30,
  },

  botonText: {
    marginTop: 5,
    fontSize: 18,
    textAlign: "center",
    color: "#87BCDD",
    fontWeight: "bold",
  },

  botonText2: {
    marginTop: 5,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});