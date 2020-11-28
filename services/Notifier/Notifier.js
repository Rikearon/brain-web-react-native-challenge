import React, { forwardRef, useEffect, useState } from 'react';

import { Snackbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { notifications } from './notificationTypes';

const Notifier = (props, ref) => {
  const [notificationType, setNotificationType] = useState('');
  const [visible, setVisible] = useState(false);

  const insets = useSafeAreaInsets();

  const { selectedCounter, counters } = props;

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1200);
  }, [visible]);

  const notify = (notificationType) => {
    setNotificationType(notificationType);
    setVisible(true);
    console.log('have notified', notificationType);
  };

  if (ref) ref.current = { notify };

  return (
    <Snackbar visible={visible} style={{ marginBottom: insets.bottom + 20 }}>
      {notifications(selectedCounter, counters)[notificationType]}
    </Snackbar>
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
