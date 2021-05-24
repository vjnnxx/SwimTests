import React from 'react';
import {Image} from 'react-native';
import {images_Style} from '../components/style';

export default function Logo(){
    return(
        <Image
        source={require('../../assets/perfil.png')}
        style={images_Style.info}
        > 
        </Image>
    );
}