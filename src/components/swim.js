import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {images_Style} from '../components/style';

export default function Icone_nado(){
    return(
        <Image
        source={require('../../assets/swim.png')}
        style={images_Style.info}
        > 
        </Image>
    );
}