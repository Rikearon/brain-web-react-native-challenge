import { ACTIONS } from './actions';

const initialState = {
  selectedCounter: 0,
  counters: [0],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SELECT_COUNTER:
      return {
        ...state,
        selectedCounter: action.payload,
      };

    case ACTIONS.ADD_COUNTER:
      return {
        ...state,
        counters: state.counters.concat([0]),
      };
    case ACTIONS.DELETE_COUNTER:
      return {
        ...state,
        counters: state.counters.filter(
          (item, index) => index != state.selectedCounter
        ),
        selectedCounter: Math.min(state.selectedCounter - 1, 0),
      };

    case ACTIONS.INCREMENT_COUNTER:
      return {
        ...state,
        counters: state.counters.map((item, index) =>
          index == state.selectedCounter ? ++item : item
        ),
      };

    case ACTIONS.DECREMENT_COUNTER:
      return {
        ...state,
        counters: state.counters.map((item, index) =>
          index == state.selectedCounter ? Math.max(--item, 0) : item
        ),
      };

    case ACTIONS.RESET_COUNTER:
      return {
        ...state,
        counters: state.counters.map((item, index) =>
          index == state.selectedCounter ? 0 : item
        ),
      };

    default:
      return state;
  }
}
