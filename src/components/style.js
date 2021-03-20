//Arquivo contendo estilos dos componentes do app
import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     
    },
    tituloInicial: {
      marginTop: 100,
      marginBottom: 93,
      fontSize: 36,
    },
    textoInicial: {
      fontSize: 25, 
      textAlign: 'center',
      marginBottom: 80,
  
    }
});

const menuStyle= StyleSheet.create({

    subTitulo: {
        color: '#47525E',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
    }
});

export {homeStyle, menuStyle};