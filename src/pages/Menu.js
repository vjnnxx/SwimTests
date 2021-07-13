import React from 'react';
import {Text, View} from 'react-native';
import Botao from '../components/Botao';
import {menuStyle, padrao} from '../components/style';
//Página inicial do aplicativo

export default function App( {navigation} ) {
  return (
    
    <View style={padrao.container}>
        <Text style={menuStyle.subTitulo}>Selecione um teste para continuar</Text>
        <Botao value="T30" onPress= {() => navigation.navigate('T30')} style={menuStyle.botao}></Botao>
        <Botao value="T400" onPress= {() => navigation.navigate('T400')} style={menuStyle.botao}></Botao>
    </View>
  );
}

