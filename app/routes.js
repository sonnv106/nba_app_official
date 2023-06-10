import React from 'react';
import {Platform} from 'react-native/types';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsArticleComponent from './components/news/article';
import GameArticleComponent from './components/games/article';
import LogoTitle from './components/utils/logo';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const AppStack = () => (
  <Tab.Navigator 
  activeColor="#f0edf6"
  inactiveColor="#3e2465"
  barStyle={{ backgroundColor: '#694fad',paddingBottom: 0 }}>
    <Tab.Screen component={News} name="News"/>
    <Tab.Screen component={Games} name="Games" />
  </Tab.Navigator>
);

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: true}}>
        <Stack.Screen component={AppStack} name="App" options={{
          headerTitle: LogoTitle,
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#001338',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF'
        
        }}/>
        <Stack.Screen component={SignIn} name="Auth" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
