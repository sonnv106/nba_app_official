import React from 'react';
import {Platform} from 'react-native/types';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const AppStack = () => (
  <Tab.Navigator 
  activeColor="#f0edf6"
  inactiveColor="#3e2465"
  barStyle={{ backgroundColor: '#694fad',paddingBottom: 0 }}>
    <Tab.Screen component={News} name="News" options={{
        tabBarIcon: ({color}) =>(
            <View></View>
        )
    }}/>
    <Tab.Screen component={Games} name="Games" />
  </Tab.Navigator>
);

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={AppStack} name="App" />
        <Stack.Screen component={SignIn} name="Auth" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
