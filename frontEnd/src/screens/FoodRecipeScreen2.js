
import { Image, StyleSheet, Text, View } from "react-native";

export default function FoodScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/img/hipercalorico.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>Hipercalórica:</Text>
        <Text style={styles.subTitle}>São dietas com alto nível calórico, voltadas para pessoas que tem dificuldade em ganhar peso.
        </Text>
        <Text style={styles.title}>Objetivo:</Text>
        <Text style={styles.subTitle}>
        Indivíduos que tem o objetivo de recuperar peso e ganho de massa muscular.
        </Text>
        <Text style={styles.titleRecipe}>Confira a receita Smoothie de morango e banana</Text>
        <Text style={styles.title}>Ingredientes: </Text>
        <Text style={styles.subTitleRecipe}>• 2 bananas</Text>
        <Text style={styles.subTitleRecipe}>• 2 xícaras de chá de morangos</Text>
        <Text style={styles.subTitleRecipe}>• 1/3 xícara de chá de iogurte natural bem consistente</Text>
        <Text style={styles.subTitleRecipe}>• Adoçante ou açúcar a gosto</Text>
        <Text style={styles.subTitleRecipe}>• Gelo a gosto</Text>
    
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
