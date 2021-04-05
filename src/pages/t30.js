import React, {useState} from 'react';
import { Text, View, TextInput, Keyboard } from 'react-native';
import Botao from '../components/Botao';
import {pag01_Style, padrao} from '../components/style';


//Página do teste t30
export default function T30( {navigation}) {
  
  const calcular = () =>{
    let arr = [120, 200]
    return arr;
  }

  const [result, setResult] = useState(''); 

  return (
   <View style={padrao.container}>
      
      <View style={{alignItems: 'center'}}>
        <TextInput 
        style= {padrao.input}
        autoFocus={true}
        placeholder="Distância percorrida em metros"
        keyboardType="numeric"
        onBlur={Keyboard.dismiss()}
      >

      </TextInput>

      <Botao 
      value="Calcular"
      onPress = {result => setResult(calcular())} 
      ></Botao>
      </View>
      

      <View style={pag01_Style.resultados}>
        <Text style={pag01_Style.subTitulo}>Resultados</Text>

        <Text style={pag01_Style.texto}>Velocidade média: {result[0]}</Text>
        <Text style={pag01_Style.texto}>Tempo médio: {result[1]}</Text>

        <View style={{alignItems: 'center',}}>
          <Botao value="Ver tempos recomendados" onPress = {() => navigation.navigate('tempos_recomendados_t30')}></Botao>
        </View>
        
      </View>
    </View>

    
    
  );
}
