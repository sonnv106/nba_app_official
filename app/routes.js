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
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const AppStack = () => (
  <Tab.Navigator 
  activeColor="#00194b"
  inactiveColor='#FFFFFF'
  barStyle={{ backgroundColor: '#001338',paddingBottom: 0 }}
  labeled = {false}
  screenOptions={{
  }}>
    <Tab.Screen component={News} name="News" options={{
      tabBarIcon: ({focused, color})=>{
        return (
          <Icon name='basketball-outline' size={25} color = {color}/>
        )
      },
    }}/>
    <Tab.Screen component={Games} name="Games" options={{
      tabBarIcon: ({focused, color})=>{
        return (
          <Icon name='tv-outline' size={25} color = {color} />
        )
      },
    }}/>
  </Tab.Navigator>
);

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth" screenOptions={{
          headerShown: true
        }}>
        <Stack.Screen component={AppStack} name="App" options={{
          headerTitle: LogoTitle,
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#001338',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
        }}/>
        <Stack.Screen component={SignIn} name="Auth" options={{
          headerShown: false
        }} />
        <Stack.Screen component={NewsArticleComponent} name='Article'/>
        <Stack.Screen component={GameArticleComponent} name='GameArticle'/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
