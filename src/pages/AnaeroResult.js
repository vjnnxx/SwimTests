import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {padrao, resultados, anaeroStyle} from '../components/style';
import {convertTime} from '../utils/convertTime';



export default function AnaeroResult( {navigation, route} ) {
  
  var tempo = route.params.tempo;
  //AN2

  //100m
  var velmed100an2 = (100/tempo)*0.95;
  var tempoest100an2 = 100/velmed100an2;
  var tempo100an2 = tempoest100an2/2;

  //50m
  var tempoest50an2 = tempo100an2 - 1;

  
  velmed100an2 = velmed100an2.toFixed(2) + 'm/s';
  tempoest100an2 = convertTime(tempoest100an2);
  tempo100an2 = convertTime(tempo100an2);

  tempoest50an2 = convertTime(tempoest50an2);

  let an2 = [tempoest50an2, tempoest100an2, tempo100an2, velmed100an2];

  //AN3

  //100m 
  var velmed100an3 = Number(tempo) + 1;
  var tempo100an3 = velmed100an3/2;
  var tempo100XX = tempo100an3 * 2;

  //50m

  var tempoest50an3 = tempo100an3 - 2;

  var tempoest100an3 = convertTime(velmed100an3);
  velmed100an3 = velmed100an3.toFixed(2) + 'm/s';
  tempo100XX = convertTime(tempo100XX);
  tempo100an3 = convertTime(tempo100an3);
  tempoest50an3 = convertTime(tempoest50an3);

  let an3 = [tempoest50an3, tempoest100an3, tempo100an3, velmed100an3];


  
  
  return (
    


    <ScrollView>
      <View style={padrao.container}>
              <Text style={resultados.titulo}> Resultados (tempos recomendados) </Text>
              <Text style={resultados.texto}> Tempo: {route.params.tempo}</Text>
              <Text style={padrao.subTitulo}>AN2 MT</Text>
              <Text style={anaeroStyle.subTitulo}>50 metros</Text>
              <Text style={anaeroStyle.texto}>Tempo estimado: {an2[0]}</Text>

              <Text style={anaeroStyle.subTitulo}>100 metros</Text>
              <Text style={anaeroStyle.texto}>Tempo estimado: {an2[1]}</Text>
              <Text style={anaeroStyle.texto}>Tempo: {an2[2]}</Text>
              <Text style={anaeroStyle.texto}>Velocidade média: {an2[3]} </Text>

              <Text style={padrao.subTitulo}>AN3 VP</Text>
              <Text style={anaeroStyle.subTitulo}>50 metros</Text>
              <Text style={anaeroStyle.texto}>Tempo estimado: {an3[0]}</Text>

              <Text style={anaeroStyle.subTitulo}>100 metros</Text>
              <Text style={anaeroStyle.texto}>Tempo estimado: {an3[1]}</Text>
              <Text style={anaeroStyle.texto}>Tempo: {an3[2]}</Text>
              <Text style={anaeroStyle.texto}>Velocidade média: {an3[3]} </Text>

        </View>
    </ScrollView>
    
  );
}