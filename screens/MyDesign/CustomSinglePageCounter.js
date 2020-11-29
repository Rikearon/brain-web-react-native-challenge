import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { styles } from '../Counter/styles';
import AddCardTemplate from './Components/AddCardTemplate';
import Card from './Components/Card';
import CounterEditorOverlay from './Components/CounterEditorOverlay';
import { EditingContext } from './Components/EditingContext';

const CustomSinglePageCounter = ({ counters }) => {
  const [onEdit, setOnEdit] = useState(false);

  const toggleEditOverlay = () => {
    setOnEdit((prevState) => !prevState);
  };

  return (
    <EditingContext.Provider value={toggleEditOverlay}>
      <CounterEditorOverlay visible={onEdit} />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          style={styles.counterList}
          data={[...counters, 'template']}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) =>
            item == 'template' ? <AddCardTemplate /> : <Card index={index} />
          }
          keyExtractor={(item, index) => `${index}`}
        />
      </SafeAreaView>
    </EditingContext.Provider>
  );
};

function mapStateToProps(state) {
  return {
    counters: state.counters,
  };
}

export default connect(mapStateToProps)(CustomSinglePageCounter);
