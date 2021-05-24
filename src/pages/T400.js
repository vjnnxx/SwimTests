import React, {useState} from 'react';
import { Text, View, TextInput, Keyboard} from 'react-native';
import Botao from '../components/Botao';
import {padrao, t400} from '../components/style';



//Página do T400
export default function T400( {navigation}) {

    //Função que calcula a velocidade media
    const calcular = (tempo) =>{
        let velMedia = 400/tempo;
        return velMedia.toFixed(2) + " m/s";
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
            setResult(calcular(num));
            Keyboard.dismiss();
        } }
        >
        
        </Botao>

        <View style={{marginTop: 30, alignItems: 'center'}}>
            <Text style={t400.titulo}> Resultado</Text>
            <Text style={t400.texto}> Velocidade média: {result} </Text>
            <Botao 
                value="Calcular FMB"
                onPress={()=> navigation.navigate('FMB', {velMedia: result})}
            ></Botao>
        </View>
    </View>
        
        
    );
}