import React, {useState} from 'react';
import {Text, View, Keyboard} from 'react-native';
import Botao from '../components/Botao';
import RNPickerSelect from 'react-native-picker-select';
import {menuStyle, padrao} from '../components/style';
import { TextInput} from 'react-native-gesture-handler';



export default function TesteDistancia( {navigation} ) {
  
  
  return (
    <View style={padrao.container}>
        
      <Text style={menuStyle.subTitulo}> Teste Distância</Text>

        <View style={{marginTop: 30}}>
        
        <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeStript", value: "TypeStript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />

        <TextInput 
          placeholder="Tempo em 400m (em segundos)"
          style={padrao.input}
          keyboardType="numeric"
          onBlur={Keyboard.dismiss()}
        >
        </TextInput>

        <Botao 
          value="Ver Resultados" 
          style={{marginTop: 20}}
          onPress={()=> navigation.navigate('DistanciaResult')}
        ></Botao>
        </View>
        
        
    </View>
  );
}