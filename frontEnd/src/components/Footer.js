import { Ionicons } from '@expo/vector-icons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconButton} onPress={() =>
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    })
  }
>
        <Ionicons name="home-outline" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.navigate("Menu")}>
        <Icon5 name="utensils" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.navigate("User")}>
        <Ionicons name="person-outline" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#7a501f',
        paddingVertical: 10,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        width: '100%',
        paddingTop:20,
        paddingBottom:20
      },
      iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
      }
})