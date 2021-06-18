import React, {useState} from 'react';
import {Text, View, TextInput, Keyboard, Alert} from 'react-native';
import Botao from '../components/Botao';
import {padrao, anaeroStyle} from '../components/style';
import {convertTime} from '../utils/convertTime';


export default function IntensidadeAnaero( {navigation} ) {
  const calcular = (tempo) =>{
    tempo = Number(tempo);

    if(tempo == NaN) {
      return '';
    }

    //100m
    var velmed100an1 = (100/tempo)*0.92;
    var tempo100an1 = 100/velmed100an1;

    //200m
    var tempo200 = tempo100an1/2 ;
    var tempo200est = tempo100an1*2;

    var tempoest50an1 = tempo200 - 1;
    
    tempoest50an1 = convertTime(tempoest50an1);
    velmed100an1 = velmed100an1.toFixed(2) + "m/s";
    tempo100an1 = convertTime(tempo100an1);

    tempo200 = convertTime(tempo200);
    tempo200est = convertTime(tempo200est);

    let arr = [tempoest50an1, velmed100an1, tempo100an1, tempo200, tempo200est];

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
          onPress={()=> {
            
            if(num <= 0 || num == '' || num.startsWith('.') || num.startsWith(',') || num.startsWith('-') || /\-/.test(num) || /\,/.test(num)){
              Alert.alert("Ops!","O campo deve ser preenchido com um valor válido maior que zero!");
            } else {
                setResult(calcular(num));
                Keyboard.dismiss();
            }
          }}
        ></Botao>

        <View style={padrao.container}>
          <Text style={padrao.subTitulo}>AN1 T</Text>
          <Text style={anaeroStyle.subTitulo}>50 metros</Text>
          <Text style={anaeroStyle.texto}>Tempo estimado: {result[0]}</Text>

          <Text style={anaeroStyle.subTitulo}>100 metros</Text>
          <Text style={anaeroStyle.texto}>Tempo estimado: {result[2]}</Text>
          <Text style={anaeroStyle.texto}>Velocidade média: {result[1]} </Text>

          <Text style={anaeroStyle.subTitulo}>200 metros</Text>
          <Text style={anaeroStyle.texto}>Tempo estimado: {result[4]}</Text>
          <Text style={anaeroStyle.texto}>Velocidade: {result[3]} </Text>

          <Botao
          value="Ver demais resultados"
          onPress={()=> {
            if (result == ''){
              Alert.alert("Ops!","É preciso calcular os resultados antes de proseguir!");
            } else {
              navigation.navigate('AnaeroResult', {tempo: num});
            }
          }}
        />
        </View>

        
    </View>
    
  );
}