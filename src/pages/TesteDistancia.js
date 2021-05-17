import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Botao from '../components/Botao';
import RNPickerSelect from 'react-native-picker-select';
import {menuStyle, padrao} from '../components/style';
import { TextInput } from 'react-native-gesture-handler';



export default function TesteDistancia( {navigation} ) {
  
  const [test, setTest] = useState('');
  
  return (
    <View style={padrao.container}>
        
        <View style={{marginTop: 30}}>
        <RNPickerSelect
            style={{marginTop: 50}}
            onValueChange={(value) => value}
            items={[
                { label: "3'50 - 4'40", value: 'e01' },
                { label: "4'41 - 5'40", value: 'e02' },
                { label: "5'41 - 6'40", value: 'e03' },
                { label: "Maior que 6'41", value: 'e04' },
            ]}
        />

        <TextInput 
        placeholder="Tempo em 400m (em segundos)"
        style={padrao.input}
        >
        </TextInput>

        <Botao value="Ver Resultados" style={{marginTop: 20}}></Botao>
        </View>
        
        
    </View>
  );
}