import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen,HomeScreen,GroupDetailsScreen,GroupPlayers,PlayerProfile } from './src/components/CommonObject'

const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}
                initialRouteName={"PlayerProfile"}
            >
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='GroupDetailsScreen' component={GroupDetailsScreen} />
                <Stack.Screen name='GroupPlayers' component={GroupPlayers}/>
                <Stack.Screen name='PlayerProfile' component={PlayerProfile}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App