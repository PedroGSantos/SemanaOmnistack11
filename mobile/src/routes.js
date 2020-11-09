import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Navegacao = createStackNavigator();

import Detail from './pages/Detail';
import Incidents from './pages/Incidents';
export default function Routes(){
    return(
        <NavigationContainer>
            <Navegacao.Navigator screenOptions={{headerShown: false}}>
                <Navegacao.Screen name="Incidents" component={Incidents} />
                <Navegacao.Screen name="Detail" component={Detail} />
            </Navegacao.Navigator>
        </NavigationContainer>
    );
}

