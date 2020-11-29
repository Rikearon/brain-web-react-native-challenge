import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Config from '../screens/ConfigScreen/Config';
import { Counter } from '../screens/Counter';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const CounterStack = createStackNavigator();
const ConfigStack = createStackNavigator();

const Header = ({ scene }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </Appbar.Header>
  );
};

function _CounterStack() {
  return (
    <CounterStack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
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
    <ConfigStack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <ConfigStack.Screen
        name="Config"
        component={Config}
        options={{ title: 'Config' }}
      />
    </ConfigStack.Navigator>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: { backgroundColor: '#001c47', height: 85 },
  headerTitle: {
    fontSize: 30,
    color: '#eee',
    fontWeight: '700',
    paddingLeft: 10,
    marginTop: 40,
  },
});
