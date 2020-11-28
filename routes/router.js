import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Config from '../screens/ConfigScreen/Config';
import { Counter } from '../screens/Counter';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabsRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Counters"
          component={Counter}
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
          component={Config}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
