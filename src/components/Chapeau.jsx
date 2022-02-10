import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import getBalance , { getAddress } from '../utils/getBalance';
import { win, loss, error, canceled } from '../utils/modals';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import Hat from '../artifacts/contracts/Hat.sol/Hat.json';

const Chapeau = () => {
    useEffect(async () => {
        setBalance(await getBalance());
        setAddress(await getAddress());
    }, []);

    const [balance, setBalance] = useState('Loading...');
    const [address, setAddress] = useState('Loading...');

    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, Hat.abi, signer);
    
    const winner_hat = useSelector((state) => state.hats.winner_hat);
    const selected_hat = useSelector((state) => state.hats.selected_hat);

    const pay = async () => {
        const connection = contract.connect(signer);
        const addr = connection.address;
        try {
            await contract.payToPlay(addr, {
                value: ethers.utils.parseEther('0.005'),
            });
        } catch(e) {
            console.log(e);
        }
    };

    const mintToken = async (id, name, color) => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        try {
            await contract.mint(account, id, name, color);
        } catch(e) {
            window.alert(`Error! ${e.data.message}`);
        }
    };

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
        onClick={(async () => selected_hat ? await pay() ? (selected_hat == winner_hat ? (win(),mintToken(selected_hat.id, selected_hat.name, selected_hat.color)) : loss()) : canceled() : error()
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