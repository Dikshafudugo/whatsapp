// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import React, { useState } from 'react';
// import Login from './src/screen/Login';
// import Chat from './src/screen/Chat';


// export default function App() {
//   return (
// <View className="flex-1 items-center justify-center bg-text-2xl text-red-600">
//       <Text className="text-red-600">Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import Login from './src/screen/Login';
import Chat from './src/screen/Chat';
import ViewPage from './src/screen/ViewPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Container = styled(View);
const Message = styled(Text);

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigateToChat = () => {
    setCurrentScreen('Chat');
  };
  const Stack = createNativeStackNavigator();
  return (
    // <Container className="flex-1 justify-center items-center bg-white">
    //   {currentScreen === 'Login' && <Login navigateToChat={navigateToChat} />}      
    // </Container>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ViewPage" component={ViewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

