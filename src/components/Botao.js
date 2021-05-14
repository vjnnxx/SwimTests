import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {botao_Styles} from './style';

export default function Botao(props){
    return(
        <View style={props.style}>
            <TouchableOpacity style={botao_Styles.botao} 
            onPress={props.onPress}
            >
                <Text style={botao_Styles.botao_texto}>
                    {props.value}
                </Text>
            </TouchableOpacity>
        </View>
        
    );
}