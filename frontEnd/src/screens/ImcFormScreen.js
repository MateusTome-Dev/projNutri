import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Imc = ({ navigation }) => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imc = {
      altura: altura,
      peso: peso,
    };
  
    try {
      const response = await fetch("http://10.0.2.2:3000/api/atributte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(imc),
      });
      
      if (response.ok) {
         Alert.alert('Imc calculado com sucesso!');
        setPeso("");
        setAltura("");
  
        navigation.navigate("Main")
      } else {
         Alert.alert('Erro,Campo invalido');
      }
    } catch (error) {
      console.log(error);
      
      console.error("Erro campo invalido");
       Alert.alert("Erro campo invalido");
    }
  };
  return (
    <ImageBackground
      source={require("../assets/img/LoginAndSignUp.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Ionicons
            name="barbell-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Peso"
            placeholderTextColor="#fff"
            keyboardType="decimal-pad"
            value={peso}
            onChangeText={setPeso}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="ruler"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Altura"
            placeholderTextColor="#fff"
            keyboardType="decimal-pad" 
            value={altura}
            onChangeText={setAltura}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(51, 51, 51, 0.85)",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: "#fff",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    width: "100%",
  },
  genderButton: {
    backgroundColor: "rgba(51, 51, 51, 0.85)",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  genderButtonSelected: {
    backgroundColor: "#b0814c",
  },
  genderText: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#d3d3d3",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginVertical: 20,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 20,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export default Imc;
