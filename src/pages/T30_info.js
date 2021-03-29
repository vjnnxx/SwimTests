import React from 'react';
import { Text, View } from 'react-native';

export default function T30_info() {
  return (
   <View style={homeStyle.container}>
      <Text style={homeStyle.tituloInicial}>O que é?</Text>

      <Text style={homeStyle.textoInicial}>
        O famoso teste de 30 minutos, 
        popularmente conhecido como T-30, foi desenvolvido pelo alemão Jan Olbrecht no ano de 1985 
        com o objetivo de avaliar o limiar anaeróbio dos nadadores de meio-fundo e fundo, ou seja, 
        a famosa intensidade aeróbica ‘A2’, conhecida no universo das piscinas.
      </Text>

      <Text style={homeStyle.tituloInicial}>Pra que serve?</Text>

      <Text style={homeStyle.textoInicial}>
        Depois do tiro completado, seu técnico fará uma conta rápida da sua velocidade média por 100 metros, 
        dividindo a distância nadada pelo tempo. Depois disso, a partir de alguns cálculos o treinador têm melhor noção de quais 
        tempos os atletas devem fazer a cada série de A1, A2 e A3.
      </Text>

    </View>
    
  );
}

