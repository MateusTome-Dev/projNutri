
import { Image, StyleSheet, Text, View } from "react-native";

export default function FoodScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/img/vegana.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>Vegana:</Text>
        <Text style={styles.subTitle}>É um estilo de vida que exclui o consumo de alimentos e produtos de origem animal, e que prioriza o consumo de alimentos de origem vegetal
        </Text>
        <Text style={styles.title}>Objetivo:</Text>
        <Text style={styles.subTitle}>Dieta indicada para indivíduos que não se alimentam de produtos de origem animal.
        </Text>
        <Text style={styles.titleRecipe}>Confira a receita Iogurte grego natural vegano</Text>
        <Text style={styles.title}>Ingredientes: </Text>
        <Text style={styles.subTitleRecipe}>• 1 xícara de chá de coco ralado (120 gramas)</Text>
        <Text style={styles.subTitleRecipe}>• 1 xícara de chá de água quente (240 ml)</Text>
        <Text style={styles.subTitleRecipe}>• 2 colheres de sopa de rejuvelac</Text>
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 75,
    paddingBottom: 75,
    borderBottomColor: "#7a501f",
    borderWidth: 2,
    elevation: 5,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "black",
  },
  containerText: {
    marginLeft: 20,
  },
  title: {
    marginTop: 5,
    color: "#fff",
    fontSize: 22,
  },
  titleRecipe: {
    marginTop: 10,
    color: "#fff",
    fontSize: 20,
  },
  subTitle: {
    color: "#ccc",
    fontSize: 16,
  },
  subTitleRecipe: {
    color: "#ccc",
    fontSize: 15,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 14,
    marginRight: 10,
  },
  itemText: {
    fontSize: 12,
  },
});
