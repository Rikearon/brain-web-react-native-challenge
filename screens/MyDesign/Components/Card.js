import React, { useContext, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ACTIONS } from '../../../services/redux/actions';
import { store } from '../../../services/redux/store';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { styles } from '../../Counter/styles';
import Overlay from '../../Counter/Components/Overlay';
import { EditingContext } from './EditingContext';

const Card = ({ index, selectedCounter, counters }) => {
  const toggleEdit = useContext(EditingContext);

  const normalizeNumber = (number) => {
    let normalizedNumber = '';

    for (let i = 0; i < 4 - number.toString().length; ++i) {
      normalizedNumber += '0';
    }

    return normalizedNumber + number.toString();
  };

  const selectCounter = () => {
    store.dispatch({ type: ACTIONS.SELECT_COUNTER, payload: index });
    toggleEdit();
  };

  return (
    <TouchableWithoutFeedback onPress={selectCounter}>
      <View style={styles.cardView}>
        <View style={styles.cardTopRow}>
          <Text style={styles.titleLabel}>Counter {index + 1}</Text>
          <Ionicons name="ios-more" color="#333" size={30} />
        </View>
        <Text style={styles.counterLabel}>
          {normalizeNumber(counters[index])}
        </Text>

        {selectedCounter != index && <Overlay />}
      </View>
    </TouchableWithoutFeedback>
  );
};

function mapStateToProps(state) {
  return {
    selectedCounter: state.selectedCounter,
    counters: state.counters,
  };
}

export default connect(mapStateToProps)(Card);
