//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Botao from '../components/Botao';
import {homeStyle, padrao} from '../components/style';


//Página inicial do aplicativo
export default function Home( {navigation} ) {
  return (
   <View style={padrao.container}>
      

      <Text style={homeStyle.textoInicial}>Bem vindo ao Swim Assessment!</Text> 

      <Text style={homeStyle.textoInicial02}>
      É um prazer ajudar atletas e professores a alcançar seus objetivos.
      Clique no botão abaixo para começar.</Text>

      <Botao value="Começar" onPress= {() => navigation.navigate('Menu')}></Botao>
    </View>
    
  );
}
