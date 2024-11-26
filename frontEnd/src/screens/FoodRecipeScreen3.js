
import { Image, StyleSheet, Text, View } from "react-native";

export default function FoodScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/img/nordica.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>Nórdica:</Text>
        <Text style={styles.subTitle}>A dieta nórdica é um regime alimentar baseado na alimentação tradicional dos países nórdicos, como a Noruega, Dinamarca.
        </Text>
        <Text style={styles.title}>Objetivo:</Text>
        <Text style={styles.subTitle}>A dieta nórdica é considerada um modelo de saúde plena pela OMS e pode ser indicada para quem quer melhorar a saúde.
        </Text>
        <Text style={styles.titleRecipe}>Confira a receita Far l Kat</Text>
        <Text style={styles.title}>Ingredientes: </Text>
        <Text style={styles.subTitleRecipe}>• 1 colher sopa de farinha de trigo</Text>
        <Text style={styles.subTitleRecipe}>• 1 repolho</Text>
        <Text style={styles.subTitleRecipe}>• 1kg de peito de carneiro</Text>
        <Text style={styles.subTitleRecipe}>• 100g de manteiga</Text>
        <Text style={styles.subTitleRecipe}>• Salsa</Text>
    
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
