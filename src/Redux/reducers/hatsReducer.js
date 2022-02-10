const SELECT_HAT = 'App/hats/SELECT_HAT';
const RESET_HAT = 'App/hats/RESET_HAT';

const initialState = {
  selected_hat: null,
};

export const selectHat = (payload) => ({
  type: SELECT_HAT,
  payload,
});

export const resetHat = () => ({
    type: RESET_HAT,
  });

const hatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_HAT:
      return {
        selected_hat: action.payload
      };
    case RESET_HAT:
      return {
        selected_hat: null
      };
    default:
      return state;
  }
};

export default hatsReducer;