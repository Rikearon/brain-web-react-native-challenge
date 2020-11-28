import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Config from '../screens/ConfigScreen/Config';
import { Counter } from '../screens/Counter';

const Tab = createBottomTabNavigator();

export default function TabsRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Counter} />
        <Tab.Screen name="Settings" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
