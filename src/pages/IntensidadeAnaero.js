import React, {useState} from 'react';
import {Text, View, TextInput, Keyboard} from 'react-native';
import Botao from '../components/Botao';
import {padrao, anaeroStyle} from '../components/style';



export default function IntensidadeAnaero( {navigation} ) {
  const calcular = () =>{
    let arr = [120, 200]
    return arr;
  }

  const [result, setResult] = useState(''); 
  const [num, setNum] = useState('');
  
  return (
    
    <View style={padrao.container}>
        <TextInput
          style={padrao.input} 
          placeholder="Tempo para 100 metros (segundos)"
          keyboardType="numeric"
          autoFocus={true}
          onChangeText = {(num) => setNum(num)}
          defaultValue={num}
        ></TextInput>

        <Botao
          value="Calcular"
          onPress={(result)=> setResult(calcular())}
        ></Botao>

        <View style={padrao.container}>
          <Text style={padrao.subTitulo}>AN1 T</Text>
          <Text style={anaeroStyle.subTitulo}>50 metros</Text>
          <Text style={anaeroStyle.texto}>Tempo estimado: {result[0]}</Text>

          <Text style={anaeroStyle.subTitulo}>100 metros</Text>
          <Text style={anaeroStyle.texto}>Tempo estimado: {result[0]}</Text>
          <Text style={anaeroStyle.texto}>Velocidade média: {result[1]} m/s</Text>

          <Text style={anaeroStyle.subTitulo}>200 metros</Text>
          <Text style={anaeroStyle.texto}>Tempo estimado: {result[0]}</Text>
          <Text style={anaeroStyle.texto}>Velocidade: {result[1]} m/s</Text>

          <Botao
          value="Ver demais resultados"
          onPress={()=> navigation.navigate('AnaeroResult', {numero: num})}
        />
        </View>

        
    </View>
    
  );
}