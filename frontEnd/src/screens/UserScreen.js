import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from '../components/Footer';
import imgDefault from '../assets/img/avatarProfile.png'

export default function UserScreen() {
  const [imageUri, setImageUri] = useState('');
  const [maskedPassword, setMaskedPassword] = useState('●●●●●●●●');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit1 = async () => {
    const userId = 1;
    try {
      const response = await fetch(`http://10.0.2.2:3000/api/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNome(data.user.nome);
        setEmail(data.user.email);
      } else {
        Alert.alert("Erro", "Não foi possível buscar os dados.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API", error);
      Alert.alert("Erro", "Erro ao buscar dados da API.");
    }
  };

  useEffect(() => {
    handleSubmit1();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/api/image/1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const base64Image = data.dados;
        if (base64Image) {
          setImageUri(`data:image/jpeg;base64,${base64Image}`);
        } else {
          Alert.alert("Erro", "Imagem não encontrada nos dados retornados.");
        }
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API", error);
      Alert.alert("Erro", "Erro ao buscar dados da API.");
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.containerImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <Image source={imgDefault} style={styles.image} />
          )}
          <View style={styles.containerCam}>
          <TouchableOpacity style={styles.buttonCam} onPress={()=>navigation.navigate("Login")}>
            <Ionicons name="camera" size={32} color="white" />
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputContent}>
            <Ionicons name="person-outline" size={24} color="#fff" style={styles.icon} />
            <View style={styles.input}>
              <Text style={styles.text}>{nome}</Text>
            </View>
          </View>
          <View style={styles.inputContent}>
            <Ionicons name="mail-outline" size={24} color="#fff" style={styles.icon} />
            <View style={styles.input}>
              <Text style={styles.text}>{email}</Text>
            </View>
          </View>
          <View style={styles.inputContent}>
            <Ionicons name="lock-closed-outline" size={24} color="#fff" style={styles.icon} />
            <View style={styles.input}>
              <Text style={styles.text}>{maskedPassword}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#7a501f",
    paddingTop: 75,
    paddingBottom: 75,
    borderBottomColor: "white",
    borderWidth: 1,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "black",
  },
  inputContainer: {
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderColor: "white",
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  containerCam: {
    position: 'relative', // Importante para que o botão respeite o container
  },
  buttonCam: {
    position: 'absolute', // Posiciona o botão sobre a imagem
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 10,
    bottom: 0, // Alinha ao canto inferior da imagem
    left:40, // Alinha ao canto direito da imagem
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
