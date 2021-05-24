import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Importando componentes customizados
import Home from './src/pages/Home';
import Menu from './src/pages/Menu';
import t30 from './src/pages/T30';
import Icone_informacao from './src/components/info';
import T30_info from './src/pages/T30_info';
import t30_tr from './src/pages/t30_tr';
import Icone_nado from './src/components/swim';
import T400 from './src/pages/T400';
import FMB from './src/pages/FMB';
import Zonas from './src/pages/Zonas';
import TesteDistancia from './src/pages/TesteDistancia';
import IntensidadeAnaero from './src/pages/IntensidadeAnaero';
import DistanciaResult from './src/pages/DistanciaResult';
import AnaeroResult from './src/pages/AnaeroResult';



//Criando a stack
const Stack = createStackNavigator();


//Página inicial do aplicativo
export default function App() {

  return (
    

    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = "Home"
        screenOptions = {{
          headerTitleAlign: 'center', 
          headerTitleStyle: {
              fontFamily: 'Roboto',
              fontWeight: 'bold',
          }}}>

        {/*Screen referente a pagina inicial*/}
        <Stack.Screen 
          name= "Home" 
          component={Home}
          options = {{
            title: '',
            headerShown: false,
          }}
          headerMode = 'none'
        />
        
        {/*Screen referente ao menu*/}
        <Stack.Screen 
          name= "Menu" 
          component={Menu}
          options={{
            title: 'Testes', 
          }}
        />
        
        {/*Screens referentes a pagina t30*/}

        <Stack.Screen
          name= "T30_info"
          component= {T30_info}
          options ={{
            title: 'Teste T30',
          }}
        />

        <Stack.Screen 
          name= "T30" 
          component= {t30} 
          options={{headerRight: () => <Icone_informacao></Icone_informacao>}}
        />
        

        <Stack.Screen
          name= "tempos_recomendados_t30"
          component={t30_tr}
          options={{
            title: 'Teste T30',
            headerRight: () => <Icone_nado></Icone_nado>
          }
        }
        />

        <Stack.Screen
        name = "T400"
        component={T400}
        options={{
          title: 'T400',
          headerRight: () => <Icone_informacao></Icone_informacao>
        }}
        />

      <Stack.Screen
        name = "FMB"
        component={FMB}
        options={{
          title: 'FMB',
          headerRight: () => <Icone_informacao></Icone_informacao>
        }}
      />

      <Stack.Screen
        name="Zonas"
        component={Zonas}
      />


      <Stack.Screen 
        name = "Teste Distância" 
        component={TesteDistancia}
        options={{
          title: 'Teste Distância',
          headerRight: () => <Icone_informacao></Icone_informacao>
        }}
      />
      <Stack.Screen 
          name = "Intensidade Anaerobia" 
          component={IntensidadeAnaero}
          options={{
            title: 'Intensidade Anaeróbia',
            headerRight: () => <Icone_informacao></Icone_informacao>
          }}
      />

      <Stack.Screen
          name = "DistanciaResult"
          component={DistanciaResult}
          options={{
            title: 'Teste Distância',
            headerRight: () => <Icone_informacao></Icone_informacao>
          }}
      />

      <Stack.Screen
          name = "AnaeroResult"
          component={AnaeroResult}
          options={{
            title: 'Teste Distância',
            headerRight: () => <Icone_informacao></Icone_informacao>
          }}
      />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

