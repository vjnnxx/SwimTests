import React, {useState} from 'react';
import { Text, View, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import Botao from '../components/Botao';
import {padrao, fmb} from '../components/style';



//Página de multi testes
export default function FMB( {navigation, route}) {

    var velMedia = route.params.velMedia;
    //Função de calcular a ser implementada
    const calcular = (tempo) =>{
        let medCiclo = Number(tempo)/3;
        let fmb = 60/medCiclo;
        let cmb = (velMedia/fmb)*60;
        let indiceNado = cmb*velMedia;

        //Separa minutos e segundos se necessário
        let medText;
        if(medCiclo % 60 != 0){
            var segundos = medCiclo % 60;
            medCiclo = medCiclo/60;
            medText = Math.floor(medCiclo) + "'" + Math.floor(segundos) + "''";
        } else {
            medCiclo = medCiclo/60;
            medText = medCiclo + "'";
        }
        
        let arr = [medText, fmb.toFixed(2), cmb.toFixed(2), indiceNado.toFixed(2)];
        return arr;
    }
    
      const [result, setResult] = useState('');
      const [num, setNum] = useState('');
    
    return (
    <View 
    style={padrao.container}>
        

        <TextInput
            style={padrao.input}
            placeholder="Tempo em segundos para 3 ciclos"
            keyboardType="numeric"
            onChangeText= {(num) => setNum(num)}
            defaultValue = {num}
        />
        
        <Botao 
        value="Calcular" 
        onPress={() => setResult(calcular(num))}
        >
        
        </Botao>

        <View style={{marginTop: 15, alignContent: 'center'}}>
            <Text style={fmb.titulo}> Resultados</Text>
            <Text style={fmb.texto}> Média de tempo para 1 ciclo: {result[0]} </Text>
            <Text style={fmb.texto}> Frequência Média de Braçada: {result[1]} </Text>
            <Text style={fmb.texto}> Comprimento Médio de Braçada: {result[2]} </Text>
            <Text style={fmb.texto}> Índice de Nado: {result[3]} </Text>
            
        </View>
    </View>
        
        
    );
}