import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserScreen from '../screens/UserScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserDetails" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators