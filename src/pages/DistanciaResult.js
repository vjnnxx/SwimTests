import React from 'react';
import {Text, View} from 'react-native';
import {padrao, resultados} from '../components/style';



export default function DistanciaResult( {navigation} ) {
  return (
    
    <View style={padrao.container}>
        <Text style={resultados.titulo}> Tempos Recomendados </Text>
        <Text style={resultados.texto}> Faixa: 3'50 - 4'40</Text>
        <Text style={resultados.texto}> Tempo: 120seg</Text>
        <Text style={resultados.texto}> 50 metros: 20seg</Text>
        <Text style={resultados.texto}> 100 metros: 20seg</Text>
        <Text style={resultados.texto}> 200 metros: 20seg</Text>
        <Text style={resultados.texto}> 300 metros: 20seg</Text>
        <Text style={resultados.texto}> 400 metros: 20seg</Text>
    </View>
  );
}