import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import image from '../../../assets/start.png';

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
          console.log('clicked');
        }}
      >
        <Text
          style={{
            marginTop: 20,
            fontSize: 24,
            color: '#777',
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