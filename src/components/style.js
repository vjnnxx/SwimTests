//Arquivo contendo estilos dos componentes do app
import {StyleSheet} from 'react-native';

// Configurações de estilo da página inicial
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

// Configurações de estilo do menu
const menuStyle= StyleSheet.create({

    subTitulo: {
        color: '#47525E',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
    }
});

// Configurações de estilo da página t30
const pag01_Style= StyleSheet.create({
  input: {
    width: 300,
    borderBottomWidth: 1,
    marginTop: 50,
  }
});

const images_Style = StyleSheet.create({
  info: {
    height: 35,
    width: 35,
    marginRight: 10,
    
  }
});

const botao_Styles = StyleSheet.create({
  botao: {
      backgroundColor: '#2E9BF5',
      height: 50,
      width: 300,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40
  },
  botao_texto: {
      color: '#FFFFFF',
      fontFamily: 'Roboto',
      fontSize: 20,
  }
});
export {homeStyle, menuStyle, pag01_Style, images_Style, botao_Styles};