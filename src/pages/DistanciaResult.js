import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {padrao, resultados} from '../components/style';
import {convertTime} from '../utils/convertTime';



export default function DistanciaResult( {navigation, route} ) {
  
  var value = route.params.value;
  var tempo = route.params.tempo;
  var vomax = [0,0,0,0,0]; //0 = 50m, 1 = 100m, 2 = 200m, 3 = 400m, 4 = 800m
  var anaero = [0,0,0,0,0]; //0 = 50m, 1 = 100m, 2 = 200m, 3 = 400m, 4 = 800m
  var aero = [0,0,0,0,0]; //0 = 50m, 1 = 100m, 2 = 200m, 3 = 400m, 4 = 800m
  var faixa;
  switch (value){
    case 'op01':
      faixa = "3'50 - 4'40"

      //Cálculo dos valores de A3
      
      vomax[3] = 400/((400/tempo)*0.94); //400m
      vomax[4] = (vomax[3]*2) + 3; //800m
      vomax[2] = (vomax[3]/2) - 3; //200m
      vomax[1] = (vomax[2]/2) - 2; //100m
      vomax[0] = (vomax[1]/2) - 1.5; //50m

      //A2
      anaero[3] = 400/(((400/tempo)*0.94)*0.95);
      anaero[4] = anaero[3]*2 + 3;
      anaero[2] = (anaero[3]/2) - 3;
      anaero[1] = (anaero[2]/2) - 2;
      anaero[0] = (anaero[1]/2) - 1.5;

      //A3
      aero[3] = 400/((((400/tempo)*0.95)*0.94)*0.93);
      aero[4] = aero[3]*2 + 3;
      aero[2] = (aero[3]/2) - 3;
      aero[1] = (aero[2]/2) - 2;
      aero[0] = (aero[1]/2) - 1.5;
      break;
    case 'op02':
      faixa = "4'41 - 5'40"

      //A3
      vomax[3] = 400/((400/tempo)*0.95); //400m
      vomax[4] = (vomax[3]*2) + 3; //800m
      vomax[2] = (vomax[3]/2) - 3; //200m
      vomax[1] = (vomax[2]/2) - 2; //100m
      vomax[0] = (vomax[1]/2) - 1.5; //50m


      //A2
      anaero[3] = 400/(((400/tempo)*0.95)*0.95);
      anaero[4] = anaero[3]*2 + 3;
      anaero[2] = (anaero[3]/2) - 3;
      anaero[1] = (anaero[2]/2) - 2;
      anaero[0] = (anaero[1]/2) - 1.5;

      

      //A1
      aero[3] = 400/((((400/tempo)*0.95)*0.95)*0.93);
      aero[4] = aero[3]*2 + 3;
      aero[2] = (aero[3]/2) - 3;
      aero[1] = (aero[2]/2) - 2;
      aero[0] = aero[1]/2;

      break;
    case 'op03':
      faixa = "5'41 - 6'40"


      //A3
      vomax[3] = 400/((400/tempo)*0.96); //400m
      vomax[4] = (vomax[3]*2) + 3; //800m
      vomax[2] = (vomax[3]/2) - 3; //200m
      vomax[1] = (vomax[2]/2) - 2; //100m
      vomax[0] = (vomax[1]/2) - 1.5; //50m

      

      //A2
      anaero[3] = 400/(((400/tempo)*0.96)*0.95);
      anaero[4] = anaero[3]*2 + 3;
      anaero[2] = (anaero[3]/2) - 3;
      anaero[1] = (anaero[2]/2) - 2;
      anaero[0] = (anaero[1]/2) - 1.5;

     

      //A1
      aero[3] = 400/((((400/tempo)*0.96)*0.95)*0.93);
      aero[4] = aero[3]*2 + 3;
      aero[2] = (aero[3]/2) - 3;
      aero[1] = (aero[2]/2) - 2;
      aero[0] = (aero[1]/2) - 1.5;

      

      break;
    case 'op04':
      faixa = "Maior que 6'41"

      //A3
      vomax[3] = 400/((400/tempo)*0.97); //400m
      vomax[4] = (vomax[3]*2) + 3; //800m
      vomax[2] = (vomax[3]/2) - 3; //200m
      vomax[1] = (vomax[2]/2) - 2; //100m
      vomax[0] = (vomax[1]/2) - 1.5; //50m
 
                     
 
      //A2
      anaero[3] = 400/(((400/tempo)*0.97)*0.95);
      anaero[4] = anaero[3]*2 + 3;
      anaero[2] = (anaero[3]/2) - 3;
      anaero[1] = (anaero[2]/2) - 2;
      anaero[0] = (anaero[1]/2) - 1.5;
 
                     
 
      //A1
      aero[3] = 400/((((400/tempo)*0.97)*0.95)*0.93);
      aero[4] = aero[3]*2 + 3;
      aero[2] = (aero[3]/2) - 3;
      aero[1] = (aero[2]/2) - 2;
      aero[0] = (aero[1]/2) - 1.5;
 
                     

      break;
    
  }

  //Converter resultados em texto
  vomax[0] = convertTime(vomax[0]);
  vomax[1] = convertTime(vomax[1]);
  vomax[2] = convertTime(vomax[2]);
  vomax[3] = convertTime(vomax[3]);
  vomax[4] = convertTime(vomax[4]);

  anaero[0] = convertTime(anaero[0]);
  anaero[1] = convertTime(anaero[1]);
  anaero[2] = convertTime(anaero[2]);
  anaero[3] = convertTime(anaero[3]);
  anaero[4] = convertTime(anaero[4]);

  aero[0] = convertTime(aero[0]);
  aero[1] = convertTime(aero[1]);
  aero[2] = convertTime(aero[2]);
  aero[3] = convertTime(aero[3]);
  aero[4] = convertTime(aero[4]);
  
  var tempoString = convertTime(tempo);
  return (
    

    <ScrollView>

        <View style={padrao.container}>
        <Text style={resultados.titulo}> Tempos Recomendados </Text>
        <Text style={resultados.texto}> Faixa: {faixa}</Text>
        <Text style={resultados.texto}> Tempo: {tempoString}</Text>

        <Text style={resultados.distTitulo}> A3</Text>
        <Text style={resultados.texto}> 50 metros: {vomax[0]} </Text>
        <Text style={resultados.texto}> 100 metros: {vomax[1]} </Text>
        <Text style={resultados.texto}> 200 metros: {vomax[2]} </Text>
        <Text style={resultados.texto}> 400 metros: {vomax[3]} </Text>
        <Text style={resultados.texto}> 800 metros: {vomax[4]}</Text>

        <Text style={resultados.distTitulo}> A2</Text>
        <Text style={resultados.texto}> 50 metros: {anaero[0]} </Text>
        <Text style={resultados.texto}> 100 metros: {anaero[1]} </Text>
        <Text style={resultados.texto}> 200 metros: {anaero[2]} </Text>
        <Text style={resultados.texto}> 400 metros: {anaero[3]} </Text>
        <Text style={resultados.texto}> 800 metros: {anaero[4]} </Text>
        
        <Text style={resultados.distTitulo}> A1</Text>
        <Text style={resultados.texto}> 50 metros: {aero[0]} </Text>
        <Text style={resultados.texto}> 100 metros: {aero[1]} </Text>
        <Text style={resultados.texto}> 200 metros: {aero[2]} </Text>
        <Text style={resultados.texto}> 400 metros: {aero[3]} </Text>
        <Text style={resultados.distTexto}> 800 metros: {aero[4]}</Text>
        
        </View>
        
    </ScrollView>
  );
}