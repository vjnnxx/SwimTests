import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Importando componentes customizados
import Home from './src/pages/Home';
import Menu from './src/pages/Menu';
import t30 from './src/pages/T30';
import Icone_informacao from './src/components/info';
import T30_info from './src/pages/T30_info';


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
        
        {/*Screen referente a pagina t30*/}

        <Stack.Screen
        name= "T30_info"
        component= {T30_info}
        options ={{
          title: 'Teste T30',
        }}
        >

        </Stack.Screen>
        <Stack.Screen 
        name= "T30" 
        component= {t30} 
        options={{headerRight: () => <Icone_informacao></Icone_informacao>}}
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

