import { ACTIONS } from '../redux/actions';

export const notifications = (selectedCounter, counters) => {
  return {
    [ACTIONS.ADD_COUNTER]: `Counter added, now there are ${counters.length} counters.`,
    [ACTIONS.DELETE_COUNTER]: counters.length
      ? `Counter deleted, now there are ${counters.length} counters.`
      : 'No counters to delete, create one first',
    [ACTIONS.INCREMENT_COUNTER]: counters.length
      ? `Incremented count at ${selectedCounter + 1} position, to: ${
          counters[selectedCounter]
        }`
      : 'No counters to increment, create one first',
    [ACTIONS.DECREMENT_COUNTER]: counters.length
      ? `Decremented count at ${selectedCounter + 1} position, to: ${
          counters[selectedCounter]
        }`
      : 'No counters to decrement, create one first',
    [ACTIONS.RESET_COUNTER]: counters.length
      ? `The counter at position ${selectedCounter + 1} has been reset.`
      : 'No counters to reset, create one first',
    [ACTIONS.SELECT_COUNTER]: `Counter added, now there are ${counters.length} counters`,
  };
};
