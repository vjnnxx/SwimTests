import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {images_Style} from '../components/style';

export default function Icone_informacao(props){
    return(
      <TouchableOpacity
        onPress = {props.onPress}
      >
        <Image
        source={require('../../assets/info.png')}
        style={images_Style.info}
        > 
        </Image>
      </TouchableOpacity>
      
    );
}