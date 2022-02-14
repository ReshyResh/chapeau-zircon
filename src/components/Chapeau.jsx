import React, { useEffect } from 'react';
import Icon from './Icon';
import { win, loss, error, canceled } from '../utils/modals';
import { useSelector, useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import Hat from '../artifacts/contracts/Hat.sol/Hat.json';
import { fetchAccount } from '../Redux/reducers/accountReducer';
import { contractAddress } from '../utils/contractAddr';
import { pay, mintToken } from '../utils/contractAction';

const Chapeau = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchAccount());
        }
        fetchData();
    }, [dispatch]);

    const balance = useSelector((state) => state.account.balance);
    const address = useSelector((state) => state.account.address);

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, Hat.abi, signer);
    
    const winner_hat = useSelector((state) => state.hats.winner_hat);
    const selected_hat = useSelector((state) => state.hats.selected_hat);
    
  return (
    <div>
        <Icon 
        rotated = 'true'
        h = '60'
        w = '60'
             />
        <h1 className='text-5xl my-8 font-semibold'>
            Chapeau
        </h1>
        <h2 className='mb-4'>
            Winning a hat has never been so easy....
        </h2>
        <button 
        onClick={(async () => selected_hat ? await pay(contract, signer) ? 
            (selected_hat === winner_hat ? (win(),mintToken(selected_hat.id, selected_hat.name, selected_hat.color, contract)) : loss())
            : canceled() 
            : error()
        )}
        className='rounded-full text-white bg-red-500 w-36 h-10 mb-4'>
            Start Lottery
        </button>
        <p>Balance: {balance}</p>
        <p>Address: {address}</p>
    </div>
  )
}

export default Chapeau