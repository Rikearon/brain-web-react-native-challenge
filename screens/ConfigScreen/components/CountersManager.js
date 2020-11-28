import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNotificationService } from '../../../services/Notifier';
import { ACTIONS } from '../../../services/redux/actions';
import { store } from '../../../services/redux/store';
import { styles } from '../styles';

import { FontAwesome } from '@expo/vector-icons';

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
          <View style={styles.buttonViewContainer}>
            <Text style={styles.buttonLabel}>Remove counter</Text>
            <FontAwesome name="minus" color="#de2928" size={24} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.actionButton}>
        <TouchableOpacity onPress={handleAddCounter}>
          <View style={styles.buttonViewContainer}>
            <Text style={styles.buttonLabel}>Add counter</Text>
            <FontAwesome name="plus" color="#22de92" size={24} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountersManager;
