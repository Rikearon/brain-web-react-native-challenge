import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Snackbar } from 'react-native-paper';
import { Notifier } from '../../services/Notifier';
import { ACTIONS } from '../../services/redux/actions';
import { store } from '../../services/redux/store';
import CounterController from './components/CounterController';
import CountersManager from './components/CountersManager';
import CurrentCounterStats from './components/CurrentCounterStats';
import { styles } from './styles';

const Config = () => {
  const Actions = () => {
    return (
      <View style={styles.actionsContainer}>
        <CountersManager />
        <CurrentCounterStats />
        <CounterController />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Config screen</Text>
      <Actions />
    </SafeAreaView>
  );
};

export default Config;
