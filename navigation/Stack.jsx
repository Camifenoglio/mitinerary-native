import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from '../screens/Cities';
import Details from '../screens/Details';
import Activities from '../components/Activities';

const Stack = createNativeStackNavigator();

export default function CitiesStackNavigation() {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Cities" component={Cities}
                options={{ headerShown: false }} />
            <Stack.Screen name="City" component={Details} />
            <Stack.Screen name="Activities" component={Activities} />
            
        </Stack.Navigator>

    )
}