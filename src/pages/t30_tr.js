import React from 'react';
import { Text, View } from 'react-native';
import {t30_resultados, padrao} from '../components/style';


//Página inicial do aplicativo
export default function t30_tr({route}) {

  const calcTempo = (tempo) => {
    //Separa minutos e segundos se necessário

    let tempoText;

    if(tempo % 60 != 0){
      var segundos = tempo % 60;
      tempo = tempo/60;
      tempoText = Math.floor(tempo) + "'" + Math.floor(segundos) + "''";
    } else {
      tempo = tempo/60;
      tempoText = tempo + "'";
    }

    return tempoText;
  }

  var tempo = route.params.tempo;
  let tempo50 = calcTempo((tempo/2) - 1);
  let tempo100= calcTempo(tempo - 1.5);
  let tempo200 = calcTempo((tempo*2) - 2);
  let tempo300 = calcTempo(tempo*3);
  let tempo400 = calcTempo(tempo*4); 

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