import { ACTIONS } from '../redux/actions';

export const notifications = (selectedCounter, counters) => {
  return {
    [ACTIONS.ADD_COUNTER]: `Counter added, now there are ${counters.length} counters.`,
    [ACTIONS.DELETE_COUNTER]: `Counter deleted, now there are ${counters.length} counters.`,
    [ACTIONS.INCREMENT_COUNTER]: `Incremented count at ${
      selectedCounter + 1
    } position, to: ${counters[selectedCounter]}`,
    [ACTIONS.DECREMENT_COUNTER]: `Decremented count at ${
      selectedCounter + 1
    } position, to: ${counters[selectedCounter]}`,
    [ACTIONS.RESET_COUNTER]: `The counter at position ${
      selectedCounter + 1
    } has been reset.`,
    [ACTIONS.SELECT_COUNTER]: `Counter added, now there are ${counters.length} counters`,
  };
};
