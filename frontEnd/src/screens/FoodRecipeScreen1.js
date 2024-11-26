
import { Image, StyleSheet, Text, View } from "react-native";

export default function FoodScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/img/lowcarb.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>Low Carb:</Text>
        <Text style={styles.subTitle}>
          consiste em uma dieta que limita o consumo de carboidratos e prioriza
          o consumo de proteínas.
        </Text>
        <Text style={styles.title}>Objetivo:</Text>
        <Text style={styles.subTitle}>
          indivíduo que deseja emagrecer de forma rápida.
        </Text>
        <Text style={styles.titleRecipe}>Confira uma receita de Pão Low Carb</Text>
        <Text style={styles.title}>Ingredientes: </Text>
        <Text style={styles.subTitleRecipe}>• 6 ovos</Text>
        <Text style={styles.subTitleRecipe}>• 1/3 de xícara de chá de água</Text>
        <Text style={styles.subTitleRecipe}>• 1/3 xícara de chá de azeite</Text>
        <Text style={styles.subTitleRecipe}>• 65 gramas de farinha de coco</Text>
        <Text style={styles.subTitleRecipe}>• 50 gramas de farinha de linhaça dourada</Text>
        <Text style={styles.subTitleRecipe}>• 1/2 colher de sopa de adoçante stevia ou eritritol</Text>
        <Text style={styles.subTitleRecipe}>• 1 colher de sopa de fermento químico em pó (fermento para bolo)</Text>
        <Text style={styles.subTitleRecipe}>• 1/2 colher de chá de sal</Text>
        <Text style={styles.subTitleRecipe}>• 1 colher de sopa de vinagre de maçã</Text>
    
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
