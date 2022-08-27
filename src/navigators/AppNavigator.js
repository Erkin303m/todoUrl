import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from '../screens/Todo';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="todo" component={Todo} options={{ headerShown: false }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator