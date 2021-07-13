import React, {useState} from 'react';
import { Text, View, TextInput, Keyboard, Alert} from 'react-native';
import Botao from '../components/Botao';
import {convertTime} from '../utils/convertTime';
import {padrao, t400} from '../components/style';



//Página do T400
export default function T400( {navigation}) {

    
    //Função que calcula a velocidade e o tempo médio
    const calcular = (tempo) =>{

        tempo = Number(tempo);

        if(tempo == NaN){
            return '';
        }

        let velMedia = 400/tempo;
        let velText = velMedia.toFixed(2) + "m/s";

        let tempoMed = 400/velMedia;
        let tempoText = convertTime(tempoMed); 
        let arr = [velText, velMedia, tempoText];
        return arr;
    }

    const [result, setResult] = useState('');
    const [num, setNum] = useState('');

    return (
    <View 
    style={padrao.container}>
        

        <TextInput
            style={padrao.input}
            placeholder="Tempo em 400m (em segundos)"
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
            <Text style={t400.texto}> Tempo médio: {result[2]} </Text>
            <Botao 
                value="Det. das zonas de treinamento"
                onPress={()=> { 
                    navigation.navigate('Zonas');
                 }
                }
            ></Botao>
        </View>
    </View>
        
        
    );
}