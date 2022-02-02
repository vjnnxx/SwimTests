import React from 'react';
import { View, Text } from 'react-native';
import Botao from '../components/Botao';
import {padrao, menuStyle} from '../components/style';

export default function Zonas( {navigation} ) {
  return (
    <View style={padrao.container}>

      <Text style={menuStyle.subTitulo}> Selecione uma das seções</Text>

      <Botao
        value = "Selecione faixa de tempo do T400"
        onPress = {()=> navigation.navigate('Teste Distância')}
        style = {{marginTop: 50}}
      />

      <Botao
        value = "Intensidade anaerobia"
        onPress = {()=> navigation.navigate('Intensidade Anaerobia')}
        style = {{marginTop: 70}}
      />
    </View>
    

    
  );
}