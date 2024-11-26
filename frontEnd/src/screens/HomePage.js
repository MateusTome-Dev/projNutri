import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Notifications from 'expo-notifications';

import CardImc from '../components/cardImc';
import CardHome from '../components/cardHome';
import Footer from '../components/Footer';

export default function HomeScreen() {
  const [imcValue, setImcValue] = useState('');
  const [imcState, setImcState] = useState('');
  const [nome, setNome] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/api/atributte/1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setImcValue(data.atributte.imc);
        setImcState(data.atributte.status);
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

  const items = [
    { title: 'Abaixo do peso', color: '#cfa16d' },
    { title: 'Peso Ideal', color: '#b0814c' },
    { title: 'Acima do peso', color: '#7a501f' },
  ];

  // Função para pedir permissão de notificação
  const handleNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        Alert.alert('Permissão negada', 'Você precisa habilitar as notificações nas configurações do seu dispositivo.');
        return;
      }
    }
    Alert.alert('Permissão concedida', 'Notificações ativadas com sucesso!');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Seja Bem vindo!</Text>
          <Text style={styles.nameText}>{nome}</Text>
          <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPermission}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <Text style={styles.dashboardText}>Seu IMC é: {imcValue}</Text>
          <Text style={styles.subDashboardText}>{imcState}</Text>
          <CardImc />
          {items.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Icon name="circle" size={16} color={item.color} />
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          ))}
        </View>
        <CardHome />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 15,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  welcomeText: {
    color: '#ccc',
    fontSize: 16,
  },
  nameText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dashboardText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  subDashboardText: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 16,
  },
  notificationButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  listItem: {
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemText: {
    marginLeft: 10,
    color: '#ccc',
    fontSize: 16,
  },
});
