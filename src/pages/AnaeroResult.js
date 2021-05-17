import React from 'react';
import {Text, View} from 'react-native';
import {padrao, resultados} from '../components/style';



export default function AnaeroResult( {navigation, route} ) {
  return (
    
    <View style={padrao.container}>
        <Text style={resultados.titulo}> Resultados (tempos recomendados) </Text>
        <Text style={resultados.texto}> Faixa: 3'50 - 4'40</Text>
        <Text style={resultados.texto}> Tempo: {route.params.numero}</Text>
        <Text style={resultados.texto}> 50 metros: 20seg</Text>
        <Text style={resultados.texto}> 100 metros: 20seg</Text>
        <Text style={resultados.texto}> 200 metros: 20seg</Text>
        <Text style={resultados.texto}> 300 metros: 20seg</Text>
        <Text style={resultados.texto}> 400 metros: 20seg</Text>
    </View>
  );
}