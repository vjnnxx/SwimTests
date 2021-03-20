import React from 'react';
import { Text, View } from 'react-native';
import Botao from '../components/Botao';
import {homeStyle} from '../components/style';


//Página inicial do aplicativo
export default function Home( {navigation} ) {
  return (
   <View style={homeStyle.container}>
      <Text style={homeStyle.tituloInicial}>CU PINTO MIJO BOSTA</Text>

      <Text style={homeStyle.textoInicial}> MEU OVO SUADO</Text>

      <Botao value="Começar" onPress= {() => navigation.navigate('Menu')}></Botao>
    </View>
    
  );
}
