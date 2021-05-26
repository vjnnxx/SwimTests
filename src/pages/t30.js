import React, {useState} from 'react';
import { Text, View, TextInput, Alert, Keyboard} from 'react-native';
import Botao from '../components/Botao';
import {pag01_Style, padrao} from '../components/style';


//Página do teste t30
export default function T30( {navigation}) {
  
  //Função para calcular o tempo e a velocidade media
  const calcular = (metros) =>{
    
    metros = Number(metros);

    if(metros == NaN) {
      return '';
    }

    let velMedia = Number(metros)/1800;
    let tempo = 100/velMedia;
    let tempoSeg = tempo;
    let tempoText;

    //Separa minutos e segundos se necessário
    if(tempo % 60 != 0){
      var segundos = tempo % 60;
      tempo = tempo/60;
      tempoText = Math.floor(tempo) + "'" + Math.floor(segundos) + "''";
    } else {
      tempo = tempo/60;
      tempoText = tempo + "'";
    }

    let velText = velMedia.toFixed(2) + " m/s";
    let arr = [velText, tempoText, tempoSeg];
    return arr;
  }

  const [result, setResult] = useState(''); 
  const [num, setNum] = useState('');

  return (
   <View style={padrao.container}>
      
      <View style={{alignItems: 'center'}}>
        <TextInput 
        style= {padrao.input}
        placeholder="Distância percorrida em metros"
        keyboardType="numeric"
        onChangeText= {(num) => setNum(num)}
        defaultValue = {num}
      >

      </TextInput>

      <Botao 
      value="Calcular"
      onPress = {() =>{
        if(num <= 0 || num == '' || num.startsWith('.') || num.startsWith(',') || num.startsWith('-')){
          Alert.alert("Ops!","O campo deve ser preenchido com um valor maior que zero!");
        } else {
            setResult(calcular(num));
        }
        Keyboard.dismiss();
        
      } } 
      ></Botao>
      </View>
      

      <View style={pag01_Style.resultados}>
        <Text style={pag01_Style.subTitulo}>Resultados</Text>

        <Text style={pag01_Style.texto}>Velocidade média: {result[0]}</Text>
        <Text style={pag01_Style.texto}>Tempo médio: {result[1]}</Text>

        <View style={{alignItems: 'center',}}>
          <Botao value="Ver tempos recomendados" onPress = {() => {
            if(result == ''){
              Alert.alert("Ops!","É preciso calcular os resultados antes de proseguir!");
            } else {
              navigation.navigate('tempos_recomendados_t30', {tempo : result[2]});
            }
            }}></Botao>
        </View>
        
      </View>
    </View>

    
    
  );
}
