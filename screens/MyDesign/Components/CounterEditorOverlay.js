import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, View, Text, Easing } from 'react-native';
import Animated from 'react-native-reanimated';

import CounterController from '../../ConfigScreen/components/CounterController';
import CountersManager from '../../ConfigScreen/components/CountersManager';
import { styles } from '../../Counter/styles';

const CounterEditorOverlay = ({ visible }) => {
  const y = useRef(new Animated.Value(900)).current;

  const slideIn = () => {
    console.log('sliding in');
    Animated.timing(y, {
      toValue: 0,
      duration: 13000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(y, {
      toValue: -900,
      duration: 900,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  /*  useEffect(() => {
    slideIn();
  }, [visible]); */

  useEffect(() => {
    slideIn();

    return () => {
      slideOut();
    };
  }, []);

  return (
    <Animated.View
      styles={[
        styles.cardView,
        {
          transform: [
            {
              transformY: y,
            },
          ],
        },
      ]}
    >
      <CounterController />
    </Animated.View>
  );
};

export default CounterEditorOverlay;
