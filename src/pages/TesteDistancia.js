import React, {useState} from 'react';
import {Text, View, Keyboard, Alert} from 'react-native';
import Botao from '../components/Botao';
import RNPickerSelect from 'react-native-picker-select';
import {menuStyle, padrao} from '../components/style';
import { TextInput} from 'react-native-gesture-handler';



export default function TesteDistancia( {navigation} ) {
  
  const [val, setVal] = useState('');
  const [num, setNum] = useState('');

  
  return (
    <View style={padrao.container}>
        
      <Text style={menuStyle.subTitulo}> Teste Distância</Text>

        <View style={{marginTop: 30}}>
        
        <RNPickerSelect
                placeholder= {{label: "Selecione o teste desejado"}}
                onValueChange={(value) => setVal(value)}
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
          onChangeText= {(num) => setNum(num)}
          defaultValue = {num}
        >
        </TextInput>

        <Botao 
          value="Ver Resultados" 
          style={{marginTop: 20}}
          onPress={()=> {
            if(num <= 0 || num == '' || num.startsWith('.') || num.startsWith(',') || num.startsWith('-') || /\-/.test(num) || /\,/.test(num)){
              Alert.alert("Ops!","O campo deve ser preenchido com um valor válido maior que zero!");
            } else {
              navigation.navigate('DistanciaResult', {value: val, tempo: num});
            }
            
            Keyboard.dismiss();
          }}
        ></Botao>
        </View>
        
        
    </View>
  );
}