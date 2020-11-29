import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import AddCardTemplate from './Components/AddCardTemplate';
import Card from './Components/Card';
import EmptyStateView from './Components/EmptyStateView';
import { styles } from './styles';

const Counter = ({ counters }) => {
  return (
    <SafeAreaView style={styles.container}>
      {counters.length ? (
        <FlatList
          style={styles.counterList}
          data={[...counters, 'template']}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) =>
            item == 'template' ? <AddCardTemplate /> : <Card index={index} />
          }
          keyExtractor={(_, index) => `${index}`}
        />
      ) : (
        <EmptyStateView />
      )}
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    counters: state.counters,
  };
}

export default connect(mapStateToProps)(Counter);
