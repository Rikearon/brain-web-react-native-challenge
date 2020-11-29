import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles';

const CurrentCounterStats = ({ count }) => {
  return (
    <View style={styles.actionButton}>
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.buttonLabel}>Current count: {count}</Text>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    count: state.counters[state.selectedCounter],
  };
}

export default connect(mapStateToProps)(CurrentCounterStats);
