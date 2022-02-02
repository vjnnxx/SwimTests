import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Importando componentes customizados
import Home from './src/pages/Home';
import Menu from './src/pages/Menu';
import t30 from './src/pages/t30';
import T30_info from './src/pages/T30_info';
import t30_tr from './src/pages/t30_tr';
import T400 from './src/pages/T400';
import FMB from './src/pages/FMB';
import Zonas from './src/pages/Zonas';
import TesteDistancia from './src/pages/TesteDistancia';
import IntensidadeAnaero from './src/pages/IntensidadeAnaero';
import DistanciaResult from './src/pages/DistanciaResult';
import AnaeroResult from './src/pages/AnaeroResult';
import Logo from './src/components/logo';



//Criando a stack
const Stack = createStackNavigator();


//Página inicial do aplicativo
export default function App( {navigation}) {

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
            title: 'Swim Assessment',
            //headerShown: false,
            headerRight: () => <Logo/>
          }}
          headerMode = 'none'
        />
        
        {/*Screen referente ao menu*/}
        <Stack.Screen 
          name= "Menu" 
          component={Menu}
          options={{
            title: 'Testes',
            headerRight: () => <Logo/> 
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
          options={{headerRight: () => <Logo/>}}
        />
        

        <Stack.Screen
          name= "tempos_recomendados_t30"
          component={t30_tr}
          options={{
            title: 'Teste T30',
            headerRight: () => <Logo/>
          }
        }
        />

        <Stack.Screen
        name = "T400"
        component={T400}
        options={{
          title: 'T400',
          headerRight: () => <Logo/>
        }}
        />

      <Stack.Screen
        name = "FMB"
        component={FMB}
        options={{
          title: 'FMB',
          headerRight: () => <Logo/>
        }}
      />

      <Stack.Screen
        name="Zonas"
        component={Zonas}
        options = {{
          headerRight: () => <Logo/>
        }}
      />


      <Stack.Screen 
        name = "Teste Distância" 
        component={TesteDistancia}
        options={{
          title: '',
          headerRight: () => <Logo/>
        }}
      />
      <Stack.Screen 
          name = "Intensidade Anaerobia" 
          component={IntensidadeAnaero}
          options={{
            title: 'Intensidade Anaeróbia',
            headerRight: () => <Logo/>
          }}
      />

      <Stack.Screen
          name = "DistanciaResult"
          component={DistanciaResult}
          options={{
            title: 'Resultados',
            headerRight: () => <Logo/>
          }}
      />

      <Stack.Screen
          name = "AnaeroResult"
          component={AnaeroResult}
          options={{
            title: 'Intensidade Anaeróbia',
            headerRight: () => <Logo/>
          }}
      />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

