import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} options={{animation:'slide_from_bottom'}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{animation:'slide_from_right'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
