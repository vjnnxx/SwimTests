import React from 'react';
import { Text, View } from 'react-native';
import {t30_resultados, padrao} from '../components/style';


//Página inicial do aplicativo
export default function t30_tr() {
  return (
   <View style={padrao.container}>
      <Text style={t30_resultados.titulo}>Resultados (tempos recomendados)</Text>
      <View style={{marginTop: 20}}>
        <Text style={t30_resultados.texto}> 50 metros: 20seg</Text>
        <Text style={t30_resultados.texto}> 100 metros: 20seg</Text>
        <Text style={t30_resultados.texto}> 200 metros: 20seg</Text>
        <Text style={t30_resultados.texto}> 300 metros: 20seg</Text>
        <Text style={t30_resultados.texto}> 400 metros: 20seg</Text>
      </View>
      
    </View>
    
  );
}