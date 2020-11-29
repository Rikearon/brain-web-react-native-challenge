import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Card from './Components/Card';
import EmptyStateView from './Components/EmptyStateView';
import { styles } from './styles';

const Counter = ({ counters }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!counters.length && <EmptyStateView />}
      <FlatList
        style={styles.counterList}
        data={counters}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ _, index }) => <Card index={index} />}
        keyExtractor={(_, index) => `${index}`}
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
