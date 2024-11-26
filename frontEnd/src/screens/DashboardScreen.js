import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <ImageBackground 
       source={require('../assets/img/Dashboard.jpg')}
      style={styles.background}
    >
      <View style={styles.containerText}>
      <Text style={styles.text}>
        ALIMENTE SEU CORPO{'\n'}NUTRA SUA ALMA
      </Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonUp} onPress={()=>navigation.navigate("Register")} >
          <Text style={styles.buttonTextUp}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIn} onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.buttonTextIn}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerText:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
  color:"white",
  fontSize: 28,
  textAlign: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonUp: {
    backgroundColor: '#808080',
    paddingLeft:40,
    paddingRight:40,
    padding:6,
    borderRadius: 4,
    marginBottom:50,
    opacity:0.98
  },
  buttonIn: {
    padding:10,
    paddingLeft:120,
    paddingRight:120,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomWidth:0
  },
  buttonTextUp: {
    fontSize: 22,
    color: 'black',
    fontWeight:"500"
  },
  buttonTextIn: {
    fontSize: 22,
    color: 'white',
    fontWeight:"500",
  }
});

export default DashboardScreen;
