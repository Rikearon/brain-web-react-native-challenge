import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { store } from '../../../services/redux/store';
import { ACTIONS } from '../../../services/redux/actions';
import { styles } from '../../Counter/styles';

const AddCardTemplate = () => {
  const handleAddCounter = () => {
    store.dispatch({ type: ACTIONS.ADD_COUNTER });
  };

  return (
    <TouchableOpacity onPress={handleAddCounter}>
      <View style={[styles.cardView, styles.addCardContainer]}>
        <View style={styles.plusButtonContainer}>
          <MaterialCommunityIcons name="plus" color="#eee" size={45} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddCardTemplate;
