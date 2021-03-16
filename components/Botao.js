import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default function Botao(props){
    return(
        <View>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao_texto}>
                    {props.name}
                </Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#2E9BF5',
        height: 50,
        width: 300,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao_texto: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 20,
    }
});