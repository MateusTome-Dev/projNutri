import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'

export default function FoodScreen() {
  const [objetivo, setObjetivo] = useState('');
  const [cafeTarde, setCafeTarde] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/api/diet/1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setObjetivo(data.diet.objetivo);
        setCafeTarde(data.diet.lanchedatarde);
      } else {
        Alert.alert("Erro", "Não foi possível buscar os dados.");
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
            <View style={styles.containerImage}>
                <Image source={require('../assets/img/cafeDaTarde.jpg')} style={styles.image}/>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>
                 Objetivo:
                </Text>
                <Text style={styles.subTitle}>
                {objetivo}
                </Text>
                <Text style={styles.title}>
                Café da Tarde:
                </Text>
                <Text style={styles.subTitle}>
                {cafeTarde}
                </Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"black"
    },
    containerImage:{
        alignItems: 'center',
        justifyContent:"center",

        paddingTop:75,
        paddingBottom:75,
        borderBottomColor:"#7a501f",
        borderWidth:2,
        elevation: 5, 
      },
      image:{
        height:200,
        width:200,
        borderRadius: 100,
        backgroundColor:"black"
      },
      containerText:{
        marginLeft:20
      },
      title:{
        marginTop:26,
        color:"#fff",
        fontSize:22
      },
      subTitle:{
        color: '#ccc',
        fontSize: 16,
      }
})