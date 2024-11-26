import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import CardMenu from '../components/cardMenu';
import Footer from '../components/Footer';
import { View } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Receitas Exclusivas</Text>
        <Text style={styles.subtitle}>
          Escolha seu objetivo{`\n`}As melhores receitas para atingir seu objetivo
        </Text>
        <CardMenu />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  scrollContent: {
    marginTop:30,
    padding: 16,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#d6d6d6',
    marginBottom: 16,
  },
});
