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
                placeholder= {{label: "Selecione o teste desejado"}}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: "3'50 - 4'40", value: "op01" },
                    { label: "4'41 - 5'40", value: "op02" },
                    { label: "5'41 - 6'40", value: "op03" },
                    { label: "Maior que 6'41", value: "op04" },
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