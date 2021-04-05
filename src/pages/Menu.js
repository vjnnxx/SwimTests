import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Botao from '../components/Botao';
import {menuStyle, padrao} from '../components/style';
//Página inicial do aplicativo

export default function App( {navigation} ) {
  return (
    
    <View style={padrao.container}>
        <Text style={menuStyle.subTitulo}>Selecione um teste para continuar</Text>
        <Botao value="T30" onPress= {() => navigation.navigate('T30')} ></Botao>
        <Botao value="T50/ T100/ T200/ T400" onPress= {() => navigation.navigate('Multi_testes')} ></Botao>
        <Botao value="Teste de cada distância" ></Botao>
        <Botao value="Intensidade anaeróbia" ></Botao>
    </View>
  );
}

