import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import TabsRouter from './routes/router';
import { Notifier, NotificationContext } from './services/Notifier';

import { store } from './services/redux/store';

export default function App() {
  const notificationRef = useRef(null);

  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NotificationContext.Provider value={notificationRef}>
            <TabsRouter />
          </NotificationContext.Provider>
          <Notifier ref={notificationRef} />
        </SafeAreaProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
