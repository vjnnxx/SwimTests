import React, {useState} from 'react';
import { Text, View, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import Botao from '../components/Botao';
import {padrao, t400} from '../components/style';



//Página de multi testes
export default function T400( {navigation}) {

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
            placeholder="Tempo em 400m (em segundos)"
            keyboardType="numeric"
            onBlur={Keyboard.dismiss()}
            autoFocus={true}
        />
        
        <Botao 
        value="Calcular" 
        onPress={result => setResult(calcular())}
        >
        
        </Botao>

        <View style={{marginTop: 30, alignItems: 'center'}}>
            <Text style={t400.titulo}> Resultado</Text>
            <Text style={t400.texto}> Velocidade média: {result[0]} </Text>
            <Botao 
                value="Calcular FMB"
                onPress={()=> navigation.navigate('FMB')}
            ></Botao>
        </View>
    </View>
        
        
    );
}