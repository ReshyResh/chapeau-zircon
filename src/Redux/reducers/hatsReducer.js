import hats from "../../utils/hats";

const SELECT_HAT = 'App/hats/SELECT_HAT';
const RESET_HAT = 'App/hats/RESET_HAT';

const initialState = {
  selected_hat: null,
  winner_hat: hats[Math.floor(Math.random() * hats.length)]
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
        selected_hat: action.payload,
        winner_hat: state.winner_hat
      };
    case RESET_HAT:
      return {
        selected_hat: null,
        winner_hat: state.winner_hat
      };
    default:
      return state;
  }
};

export default hatsReducer;