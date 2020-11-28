import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Card from './Components/Card';
import { styles } from './styles';

const Counter = ({ counters }) => {
  console.log(counters);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.counterTitle}>Featured Products</Text>
      <FlatList
        data={counters}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <Card index={index} />}
        keyExtractor={(item, index) => `${index}`}
      />
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    counters: state.counters,
  };
}

export default connect(mapStateToProps)(Counter);
