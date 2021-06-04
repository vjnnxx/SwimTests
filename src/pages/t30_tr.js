import React from 'react';
import { Text, View } from 'react-native';
import {t30_resultados, padrao} from '../components/style';
import {convertTime} from '../utils/convertTime';


//Página inicial do aplicativo
export default function t30_tr({route}) {


  var tempo = route.params.tempo;
  let tempo50 = convertTime((tempo/2) - 1);
  let tempo100= convertTime(tempo - 1.5);
  let tempo200 = convertTime((tempo*2) - 2);
  let tempo300 = convertTime(tempo*3);
  let tempo400 = convertTime(tempo*4); 

  return (
   <View style={padrao.container}>
      <Text style={t30_resultados.titulo}>Tempo recomendado p/ se trabalhar no limiar</Text>
      <View style={{marginTop: 20}}> 
        <Text style={t30_resultados.texto}> 50 metros:  {tempo50}</Text>
        <Text style={t30_resultados.texto}> 100 metros: {tempo100}</Text>
        <Text style={t30_resultados.texto}> 200 metros: {tempo200}</Text>
        <Text style={t30_resultados.texto}> 300 metros: {tempo300}</Text>
        <Text style={t30_resultados.texto}> 400 metros: {tempo400}</Text>
      </View>
      
    </View>
    
  );
}