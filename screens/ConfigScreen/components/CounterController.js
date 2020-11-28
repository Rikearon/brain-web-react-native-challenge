import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNotificationService } from '../../../services/Notifier';
import { ACTIONS } from '../../../services/redux/actions';
import { store } from '../../../services/redux/store';
import { styles } from '../styles';

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
            <Text style={styles.buttonLabel}>Decrement counter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionButton}>
          <TouchableOpacity onPress={handleIncrementCounter}>
            <Text style={styles.buttonLabel}>Increment counter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionButton}>
        <TouchableOpacity onPress={handleResetCounter}>
          <Text style={styles.buttonLabel}>Reset counter</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CounterController;
