import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Chat from '../screens/Chat';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Chat" 
          component={Chat} 
          options={{ headerTitle: 'Chat' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
