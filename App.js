import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './components/Botao';

//Página inicial do aplicativo
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloInicial}>Swim Tests</Text>

      <Text style={styles.textoInicial}>Bem vindo ao Swim Tests! 
      É um prazer ajudar atletas e professores a alcançar seus objetivos.
      Clique no botão abaixo para começar.</Text>

      <Botao name="Começar"></Botao>
    </View>
  );
}

//Configuração de estilos de componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
  tituloInicial: {
    marginTop: 100,
    marginBottom: 93,
    fontSize: 36,
  },
  textoInicial: {
    fontSize: 25, 
    textAlign: 'center',
    marginBottom: 120

  }
});
