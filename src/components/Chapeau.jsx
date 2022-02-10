import React, { useState, useEffect } from 'react'
import Icon from './Icon'
import getBalance from '../utils/getBalance';

import { win, loss, error } from '../utils/modals';

import { useSelector } from 'react-redux';

const Chapeau = () => {
    useEffect(async () => {
        setBalance(await getBalance());
    }, []);
    
    const [balance, setBalance] = useState('Loading...');
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
        <h2 className='mb-8'>
            Winning a hat has never been so easy....
        </h2>
        <button 
        onClick={(() => {
            selected_hat ? selected_hat  == winner_hat ? win() : loss() : error()
        })}
        className='rounded-full text-white bg-red-500 w-36 h-10'>
            Start Lottery
        </button>
        <p>Balance: {balance}</p>
    </div>
  )
}

export default Chapeau