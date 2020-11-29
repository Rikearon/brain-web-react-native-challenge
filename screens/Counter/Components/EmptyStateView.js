import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import image from '../../../assets/start.png';
import { ACTIONS } from '../../../services/redux/actions';
import { store } from '../../../services/redux/store';

const EmptyStateView = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Image
        style={{
          resizeMode: 'cover',
          width: '80%',
          maxHeight: 300,
          borderRadius: 20,
          overflow: 'hidden',
          marginTop: 20,
        }}
        source={image}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          store.dispatch({ type: ACTIONS.ADD_COUNTER });
        }}
      >
        <Text
          style={{
            marginTop: 20,
            fontSize: 24,
            color: '#eee',
            paddingHorizontal: '10%',
            textAlign: 'center',
          }}
        >
          No counters yet, create one{' '}
          <Text style={{ textDecorationLine: 'underline' }}>here</Text>
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default EmptyStateView;
