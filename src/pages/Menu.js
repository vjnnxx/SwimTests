import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Botao from '../components/Botao';
import {menuStyle} from '../components/style';
//Página inicial do aplicativo

export default function App( {navigation} ) {
  return (
    
    <View style={styles.container}>
        <Text style={menuStyle.subTitulo}>Selecione um teste para continuar</Text>
        <Botao value="T30" onPress= {() => navigation.navigate('T30')} ></Botao>
        <Botao value="T50/ T100/ T200/ T400" ></Botao>
        <Botao value="Teste de cada distância" ></Botao>
        <Botao value="Intensidade anaeróbia" ></Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
});