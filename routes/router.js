import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Config from '../screens/ConfigScreen/Config';
import { Counter } from '../screens/Counter';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { CustomSinglePageCounter } from '../screens/MyDesign';

const Tab = createBottomTabNavigator();

const CounterStack = createStackNavigator();
const ConfigStack = createStackNavigator();
const CustomCounterStack = createStackNavigator();

function _CounterStack() {
  return (
    <CounterStack.Navigator>
      <CounterStack.Screen
        name="Home"
        component={Counter}
        options={{ title: 'Counters' }}
      />
    </CounterStack.Navigator>
  );
}
function _ConfigStack() {
  return (
    <ConfigStack.Navigator>
      <ConfigStack.Screen
        name="Config"
        component={Config}
        options={{ title: 'Config' }}
      />
    </ConfigStack.Navigator>
  );
}
function _CustomCounterStack() {
  return (
    <CustomCounterStack.Navigator>
      <CustomCounterStack.Screen
        name="CustomCounters"
        component={CustomSinglePageCounter}
        options={{ title: 'CustomCounters' }}
      />
    </CustomCounterStack.Navigator>
  );
}

export default function TabsRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Counters"
          component={_CounterStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="counter"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Manager"
          component={_ConfigStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Custom"
          component={_CustomCounterStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
