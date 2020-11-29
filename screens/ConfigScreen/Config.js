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
        <View style={{ flex: 0.6 }}>
          <Text style={styles.sectionHeader}>Counters</Text>
          <CountersManager />
        </View>
        <View style={{ flex: 0.6 }}>
          <Text style={styles.sectionHeader}>Selected Counter</Text>
          <CurrentCounterStats />
          <CounterController />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Actions />
    </SafeAreaView>
  );
};

export default Config;
