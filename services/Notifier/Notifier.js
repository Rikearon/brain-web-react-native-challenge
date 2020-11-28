import React, { forwardRef, useEffect, useState } from 'react';

import { Snackbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { ACTIONS } from '../redux/actions';

const Notifier = (props, ref) => {
  const [notificationType, setNotificationType] = useState('');
  const [visible, setVisible] = useState(false);

  const { selectedCounter, counters } = props;

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 900);
  }, [visible]);

  const notify = (notificationType) => {
    setNotificationType(notificationType);
    setVisible(true);
    console.log('have notified', notificationType);
  };

  if (ref) ref.current = { notify };

  const notifications = {
    [ACTIONS.ADD_COUNTER]: `Counter added, now there are ${counters.length} counters.`,
    [ACTIONS.DELETE_COUNTER]: `Counter deleted, now there are ${counters.length} counters.`,
    [ACTIONS.INCREMENT_COUNTER]: `Incremented count at ${selectedCounter} position, to: ${counters[selectedCounter]}`,
    [ACTIONS.DECREMENT_COUNTER]: `Decremented count at ${selectedCounter} position, to: ${counters[selectedCounter]}`,
    [ACTIONS.RESET_COUNTER]: `The counter at position ${selectedCounter} has been reset.`,
    [ACTIONS.SELECT_COUNTER]: `Counter added, now there are ${counters.length} counters`,
  };

  return (
    <Snackbar visible={visible}>{notifications[notificationType]}</Snackbar>
  );
};

function mapStateToProps(state) {
  return {
    selectedCounter: state.selectedCounter,
    counters: state.counters,
  };
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(
  forwardRef(Notifier)
);
