import React, {useState} from 'react';
import { Text, View, TextInput, Keyboard, TouchableOpacity, Picker} from 'react-native';
import Botao from '../components/Botao';
import {padrao, multi_testes} from '../components/style';



//Página de multi testes
export default function Multi_testes( {navigation}) {

    const [testes, setTestes] = useState(['T50', 'T100', 'T200', 'T400']);
    const [testeEscolhido, setTesteEscolhido] = useState([]);

    return (
    <View 
    style={padrao.container}>
        
        <Picker
            style={{marginTop: 50, width: 300}}
            selectedValue={testeEscolhido}
            prompt= "Selecione um teste"
            onValueChange={(itemValue, itemIndex) =>
                setTesteEscolhido(itemValue)
            }>
            <Picker.Item label="T50" value="t50" />
            <Picker.Item label="T100" value="t100" />
            <Picker.Item label="T200" value="t200" />
            <Picker.Item label="T400" value="t400" />
        </Picker>

        <TextInput
            style={padrao.input}
            placeholder="Tempo em 400m (em segundos)"
        />
        
        <Botao value="Calcular"></Botao>

        <View style={{marginTop: 30}}>
            <Text style={multi_testes.titulo}> Resultado </Text>
            <Text style={multi_testes.texto}> Velocidade média: </Text>
            <Botao value="Calcular FMB"></Botao>
        </View>
    </View>
        
        
    );
}