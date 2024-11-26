import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const diets = [
  { name: 'Low Carb', color: '#9f631e', image: require('../assets/img/lowcarb.png'), navigator: "RecipeLowCarb"},
  { name: 'Hipercalórica', color: '#9f631e', image: require('../assets/img/hipercalorico.jpg') , navigator: "RecipeHipercalorica" },
  { name: 'Nórdica', color: '#b88040', image: require('../assets/img/nordica.jpg') , navigator: "RecipeNordica" },
  { name: 'Vegana', color: '#9f631e', image: require('../assets/img/vegana.png') , navigator: "RecipeVegana" },
];

export default function CardMenu() {
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
    borderRadius: 12,
    marginBottom: 12,
    opacity: 0.7,
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
