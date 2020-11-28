import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNotificationService } from '../../../services/Notifier';
import { ACTIONS } from '../../../services/redux/actions';
import { store } from '../../../services/redux/store';
import { styles } from '../styles';

import { FontAwesome } from '@expo/vector-icons';

const CounterController = () => {
  const notificationService = useNotificationService();

  const handleDecrementCounter = () => {
    const type = ACTIONS.DECREMENT_COUNTER;
    store.dispatch({ type });
    notificationService.current.notify(type);
  };

  const handleIncrementCounter = () => {
    const type = ACTIONS.INCREMENT_COUNTER;
    store.dispatch({ type });
    notificationService.current.notify(type);
  };

  const handleResetCounter = () => {
    const type = ACTIONS.RESET_COUNTER;
    store.dispatch({ type });
    notificationService.current.notify(type);
  };
  return (
    <>
      <View style={styles.topActions}>
        <View style={styles.actionButton}>
          <TouchableOpacity onPress={handleDecrementCounter}>
            <View style={styles.buttonViewContainer}>
              <Text style={styles.buttonLabel}>Decrement counter</Text>
              <FontAwesome name="minus" color="#de2928" size={24} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.actionButton}>
          <TouchableOpacity onPress={handleIncrementCounter}>
            <View style={styles.buttonViewContainer}>
              <Text style={styles.buttonLabel}>Increment counter</Text>
              <FontAwesome name="plus" color="#22de92" size={24} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionButton}>
        <TouchableOpacity onPress={handleResetCounter}>
          <View
            style={[styles.buttonViewContainer, { justifyContent: 'center' }]}
          >
            <Text style={styles.buttonLabel}>Reset counter</Text>
            <Text style={styles.resetIconLabel}>0</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CounterController;
