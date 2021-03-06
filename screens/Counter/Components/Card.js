import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ACTIONS } from '../../../services/redux/actions';
import { store } from '../../../services/redux/store';
import { styles } from '../styles';
import Overlay from './Overlay';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';

const Card = ({ count, index, selectedCounter, counters }) => {
  const normalizeNumber = (number) => {
    let normalizedNumber = '';

    for (let i = 0; i < 4 - number.toString().length; ++i) {
      normalizedNumber += '0';
    }

    return normalizedNumber + number.toString();
  };

  const selectCounter = () => {
    store.dispatch({ type: ACTIONS.SELECT_COUNTER, payload: index });
  };

  return (
    <TouchableWithoutFeedback onPress={selectCounter}>
      <View style={styles.cardView}>
        <Text style={styles.titleLabel}>Counter {index + 1}</Text>

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
