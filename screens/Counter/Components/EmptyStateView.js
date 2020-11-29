import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import image from '../../../assets/start.png';
import { ACTIONS } from '../../../services/redux/actions';
import { store } from '../../../services/redux/store';
import { styles } from '../styles';

const EmptyStateView = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Image style={styles.emptyStateImage} source={image} />
      <TouchableWithoutFeedback
        onPress={() => {
          store.dispatch({ type: ACTIONS.ADD_COUNTER });
        }}
      >
        <Text style={styles.emptyStateLabel}>
          No counters yet, create one{' '}
          <Text style={{ textDecorationLine: 'underline' }}>here</Text>
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default EmptyStateView;
