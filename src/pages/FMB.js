import React, {useState} from 'react';
import { Text, View, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import Botao from '../components/Botao';
import {padrao, fmb} from '../components/style';



//Página de multi testes
export default function FMB( {navigation}) {

    const [testes, setTestes] = useState(['T50', 'T100', 'T200', 'T400']);
    const [testeEscolhido, setTesteEscolhido] = useState([]);

    //Função de calcular a ser implementada
    const calcular = () =>{
        let arr = [120, 200]
        return arr;
      }
    
      const [result, setResult] = useState('');
    
    return (
    <View 
    style={padrao.container}>
        

        <TextInput
            style={padrao.input}
            placeholder="Tempo em segundos para 3 ciclos"
            keyboardType="numeric"
            onBlur={Keyboard.dismiss()}
            autoFocus={true}
        />
        
        <Botao 
        value="Calcular" 
        onPress={result => setResult(calcular())}
        >
        
        </Botao>

        <View style={{marginTop: 15, alignContent: 'center'}}>
            <Text style={fmb.titulo}> Resultados</Text>
            <Text style={fmb.texto}> Média de tempo para 1 ciclo: {result[0]} </Text>
            <Text style={fmb.texto}> Frequência Média de Braçada: {result[0]} </Text>
            <Text style={fmb.texto}> Comprimento Médio de Braçada: {result[0]} </Text>
            <Text style={fmb.texto}> Índice de Nado: {result[0]} </Text>
            
        </View>
    </View>
        
        
    );
}