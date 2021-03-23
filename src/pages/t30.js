import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import Botao from '../components/Botao';
import {homeStyle, pag01_Style,menuStyle} from '../components/style';


//Página do teste t30
export default function T30() {
  
  return (
   <View style={homeStyle.container}>
      <TextInput 
      style= {pag01_Style.input}
      autoFocus={true}
      placeholder="Distância percorrida em metros"
      keyboardType="numeric"
      >

      </TextInput>

      <Botao value="Calcular"></Botao>

      <View>
        
      </View>
    </View>
    
  );
}
