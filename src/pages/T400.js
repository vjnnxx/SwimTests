import React, {useState} from 'react';
import { Text, View, TextInput, Keyboard, Alert} from 'react-native';
import Botao from '../components/Botao';
import {padrao, t400} from '../components/style';



//Página do T400
export default function T400( {navigation}) {

    
    //Função que calcula a velocidade media
    const calcular = (tempo) =>{

        tempo = Number(tempo);

        if(tempo == NaN){
            return '';
        }

        let velMedia = 400/tempo;
        let velText = velMedia.toFixed(2) + "m/s";
        let arr = [velText, velMedia];
        return arr;
    }

    const [result, setResult] = useState('');
    const [num, setNum] = useState('');

    return (
    <View 
    style={padrao.container}>
        

        <TextInput
            style={padrao.input}
            placeholder="Tempo nos 400m (em segundos)"
            keyboardType="numeric"
            onChangeText= {(num) => setNum(num)}
            defaultValue = {num}
        />
        
        <Botao 
        value="Calcular" 
        onPress={() => {
            if(num <= 0 || num == '' || num.startsWith('.') || num.startsWith(',') || num.startsWith('-') || /\-/.test(num) || /\,/.test(num)){
                Alert.alert("Ops!","O campo deve ser preenchido com um valor válido maior que zero!");
            } else {
                setResult(calcular(num));
            }
            Keyboard.dismiss();
        } }
        >
        
        </Botao>

        <View style={{marginTop: 30, alignItems: 'center'}}>
            <Text style={t400.titulo}> Resultado</Text>
            <Text style={t400.texto}> Velocidade média: {result[0]} </Text>
            <Botao 
                value="Calcular FMB"
                onPress={()=> { 
                    if(result == ''){
                        Alert.alert("Ops!","É preciso calcular a velocidade média antes de proseguir!");
                    } else {
                        navigation.navigate('FMB', {velMedia: result[1]});
                    }}
                }
            ></Botao>
        </View>
    </View>
        
        
    );
}