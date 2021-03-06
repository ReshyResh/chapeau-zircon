import React, { useEffect, useState } from 'react';
import hats from '../utils/hats';
import shuffle from '../utils/shuffle';
import HatCard from '../components/HatCard';
import Chapeau from '../components/Chapeau';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    useEffect(() => {

    }, []);
    return (
        <>
            <div className='p-16'>
            <Chapeau />
            </div>
            <div 
            className='p-14 
                rounded-xl 
                grid 
                grid-cols-3 
                w-full 
                mx-auto 
                mt-4 
                border-solid 
                border-white 
                gap-4'
            style={{borderWidth: '50px'}}>
                {shuffle(hats).map((hat) => (
            <HatCard hat = {hat} key = {uuidv4()} />
            ))}
            </div>
        </>
        
        
    )
};

export default Home;
