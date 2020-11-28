import React from 'react';
import { styles } from '../styles';

const CurrentCounterStats = ({ count }) => {
  return (
    <View style={styles.actionButton}>
      <Text>{count}</Text>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    count: state.counters[state.selectedCounter],
  };
}

export default connect(mapStateToProps)(CurrentCounterStats);
