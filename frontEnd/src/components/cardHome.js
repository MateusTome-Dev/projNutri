import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const diets = [
  { name: 'Café da manhã', color: '#7a501f', image: require('../assets/img/CafeManha.png') , navigator: "CafeManha"},
  { name: 'Almoço', color: '#7a501f', image: require('../assets/img/almoco.png') , navigator: "Almoco"},
  { name: 'Café da tarde', color: '#7a501f', image: require('../assets/img/cafeDaTarde.jpg') , navigator: "CafeTarde"},
  { name: 'Janta', color: '#7a501f', image: require('../assets/img/jantar.png') , navigator: "Janta"},
];

export default function CardHome() {
  const navigation= useNavigation()
  return (
    <View>
      {diets.map((diet, index) => (
        <TouchableOpacity key={index} onPress={()=>navigation.navigate(diet.navigator)} style={[styles.card, { backgroundColor: diet.color }]}>
          <Text style={styles.cardText}>{diet.name}</Text>
          <Image source={diet.image} style={styles.cardImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginLeft:16,
    marginRight:10,
    borderRadius: 12,
    marginTop: 12,
    opacity: 1,
  },
  cardText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
