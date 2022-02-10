import { ethers } from 'ethers';

const LOAD_ACCOUNT = 'App/account/LOAD_ACCOUNT';
const LOAD_ACCOUNT_SUCCESS = 'App/account/LOAD_ACCOUNT_SUCCESS';

const initialState = {
  balance: 0,
  address: '',
  loading: true,
};

export const loadAccount = () => ({
  type: LOAD_ACCOUNT,
});

export const loadAccountSuccess = (payload) => ({
  type: LOAD_ACCOUNT_SUCCESS,
  payload,
});

export const fetchAccount = () => async (dispatch) => {
    dispatch(loadAccount);
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balanceRaw = await provider.getBalance(account);
    const balance = ethers.utils.formatEther(balanceRaw);
    console.log(balance);
    dispatch(loadAccountSuccess([balance, account]));
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ACCOUNT:
      return {
        balance: state.balance,
        address: state.address,
        loading: true,
      };
    case LOAD_ACCOUNT_SUCCESS:
      return {
        balance: action.payload[0],
        address: action.payload[1],
        loading: false,
      };
    default:
      return state;
  }
};

export default accountReducer;
