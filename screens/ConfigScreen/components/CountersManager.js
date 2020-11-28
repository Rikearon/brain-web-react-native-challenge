import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNotificationService } from '../../../services/Notifier';
import { ACTIONS } from '../../../services/redux/actions';
import { store } from '../../../services/redux/store';
import { styles } from '../styles';

const CountersManager = () => {
  const notificationService = useNotificationService();

  const handleDeleteCounter = () => {
    const type = ACTIONS.DELETE_COUNTER;
    store.dispatch({ type });
    notificationService.current.notify(type);
  };

  const handleAddCounter = () => {
    const type = ACTIONS.ADD_COUNTER;
    store.dispatch({ type });
    notificationService.current.notify(type);
  };

  return (
    <View style={styles.topActions}>
      <View style={styles.actionButton}>
        <TouchableOpacity onPress={handleDeleteCounter}>
          <Text style={styles.buttonLabel}>Remove counter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actionButton}>
        <TouchableOpacity onPress={handleAddCounter}>
          <Text style={styles.buttonLabel}>Add counter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountersManager;
