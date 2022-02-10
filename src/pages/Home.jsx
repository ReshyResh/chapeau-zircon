import React, { useEffect, useState } from 'react';
import hats from '../utils/hats';
import shuffle from '../utils/shuffle';
import HatCard from '../components/HatCard';
import Chapeau from '../components/Chapeau';

const Home = () => {
    useEffect(() => {

    }, []);
    return (
        <>
            <div className='p-16'>
            <Chapeau />
            </div>
            <div 
            className='p-16 
                rounded-xl 
                grid 
                grid-cols-3 
                w-full 
                mx-auto 
                mt-20 
                border-solid 
                border-white 
                gap-4'
            style={{borderWidth: '50px'}}>
                {shuffle(hats).map((hat) => (
            <HatCard hat = {hat} />
            ))}
            </div>
        </>
        
        
    )
};

export default Home;
