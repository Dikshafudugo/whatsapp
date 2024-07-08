import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, onPress, title,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screen/Login.js';
import Registration from '../screen/Registration.js';
import Otp from '../screen/Otp.js';
import Home from '../screen/Home.js';
import Events from '../screen/Events.js';
import Chat from '../screen/Chat.js';
import RoomScreen from '../screen/RoomScreen.js';
import Store from '../screen/Store.js';
import Product from '../screen/Product.js';
import Mancollection from '../screen/Mancollection.js';
import OrderHistory from '../screen/OrderHistory.js';
import Checkout from '../screen/Checkout.js';
import Profile from '../screen/Profile.js';
import OrderInfo from '../screen/OrderInfo.js';
import MyCart from '../screen/MyCart.js';
import ThankYou from '../screen/ThankYou.js';
import QuizPage from '../screen/QuizPage.js';
import PersonalChat from '../screen/PersonalChat.js';
import MyPost from '../screen/MyPost.js';
import Pinch from '../screen/Pinch.js';
import ClubbingScreen from '../screen/ClubbingScreen.js';
import ClubInfo from '../screen/ClubInfo.js';
import Inbox from '../screen/Inbox.js';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
        <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Events" component={Events} options={{headerShown: false}} />
        <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} />
        <Stack.Screen name="RoomScreen" component={RoomScreen} options={{headerShown: false}} />
        <Stack.Screen name="PersonalChat" component={PersonalChat} options={{headerShown: false}} />
        <Stack.Screen name="Store" component={Store} options={{headerShown: false}} />
        <Stack.Screen name="Product" component={Product} options={{headerShown: false}} />
        <Stack.Screen name="Mancollection" component={Mancollection} options={{headerShown: false}} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} options={{headerShown: false}} />
        <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="OrderInfo" component={OrderInfo} options={{headerShown: false}} />
        <Stack.Screen name="MyCart" component={MyCart} options={{headerShown: false}} />
        <Stack.Screen name="ThankYou" component={ThankYou} options={{headerShown: false}} />
        <Stack.Screen name="QuizPage" component={QuizPage} options={{headerShown: false}} />
        <Stack.Screen name="MyPost" component={MyPost} options={{headerShown: false}} />
        <Stack.Screen name="Pinch" component={Pinch} options={{headerShown: false}} />
        <Stack.Screen name="ClubbingScreen" component={ClubbingScreen} options={{headerShown: false}} />
        <Stack.Screen name="ClubInfo" component={ClubInfo} options={{headerShown: false}} />
        <Stack.Screen name="Inbox" component={Inbox} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

