//Arquivo contendo estilos dos componentes do app
import {StyleSheet} from 'react-native';

const padrao = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    marginTop: 50,
  },

  subTitulo: {
    fontSize: 34, 
    textAlign: 'center'
  }


});

// Configurações de estilo da página inicial
const homeStyle = StyleSheet.create({
  
    tituloInicial: {
      marginTop: 100,
      marginBottom: 93,
      fontSize: 36,
    },
    textoInicial: {
      fontSize: 25, 
      textAlign: 'center',
      marginTop: 100,
  
    },

    textoInicial02: {
      fontSize: 25, 
      textAlign: 'center',
      marginBottom: 60,
  
    }
});

// Configurações de estilo do menu
const menuStyle= StyleSheet.create({

    subTitulo: {
        color: '#47525E',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 50,
    }, 

    botao: {
      marginBottom: 60,
      marginTop: 15,
    }

});

// Configurações de estilo da página t30
const pag01_Style= StyleSheet.create({

  input: {
    width: 300,
    borderBottomWidth: 1,
    marginTop: 50,
  },

  subTitulo: {
    fontSize: 36, 
    marginTop: 40,
    textAlign: 'center',
  },

  texto: {
    fontSize: 25,
    marginTop: 30,
    marginLeft: 30,
    color: '#47525E',
  },
  
  resultados: {
    alignContent: 'flex-end',
  }

});

// Configurações de estilo da pagina de resultados do t30

const t30_resultados = StyleSheet.create({
  
  texto: {
    fontSize: 28,
    marginTop: 10,
  },

  titulo: {
    fontSize: 34,
    marginTop: 50,
    textAlign: 'center',
  }
})

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

// Configurações de estilo referentes a pagina T400

const t400 = StyleSheet.create({
  titulo: {
    fontSize: 36, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },

  texto: {
    fontSize: 25,
    marginTop: 30,
    marginLeft: 30,
    color: '#47525E',
  },

});

// Configurações de estilo referentes a pagina FMB

const fmb = StyleSheet.create({
  titulo: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },

  texto: {
    fontSize: 18,
    marginTop: 30,
    marginLeft: 30,
    color: '#47525E',
  },

});

const resultados = StyleSheet.create({
  texto: {
    fontSize: 28,
    marginTop: 10,
  },

  titulo: {
    fontSize: 34,
    marginTop: 50,
    textAlign: 'center',
  },

  subTitulo: {
    fontSize: 34, 
    textAlign: 'left'
  },

  distTitulo: {
    fontSize: 30,
    marginTop: 30,
    textAlign: 'center',
  },

  distTexto: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 20
  },
});

const anaeroStyle = StyleSheet.create({
  subTitulo: {
    color: '#47525E',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  }, 

  texto: {
    fontSize: 16,
  }
});

export {homeStyle, menuStyle, pag01_Style, images_Style, botao_Styles, t30_resultados, padrao, t400, fmb, resultados, anaeroStyle};