import React from 'react';
import Icon from './Icon';
import Star from './Star';
import { useSelector } from 'react-redux';
import { Card } from '@douyinfe/semi-ui';
import { useDispatch } from 'react-redux';
import { selectHat, resetHat } from '../Redux/reducers/hatsReducer';

const HatCard = (props) => {
    const { hat } = props;
    const selected_hat = useSelector((state) => state.hats.selected_hat);
    const dispatch = useDispatch();

    return (
        <div className='max-w-64'>
            <Card
                className= {`w-full flex justify-center flex-col h-64 shadow-xl ${selected_hat === hat ? ' bg-purple-200 !text-white' : 'bg-white'}`}
                headerLine={ false }
            >
            <div className='flex justify-between w-full'>
                <div>
                    <div className='w-10 h-10 text-center rounded-full bg-indigo-700 text-white leading-9'>A</div>
                    <p className=' font-semibold leading-10 ml-4'>{hat.name}</p>
                </div>
                <Star selected = {selected_hat === hat ? true : false } />
                
            </div>
            <div className='flex justify-center w-full'><Icon className='w-full m-auto' color = {hat.color}/></div>
            
            <div className='flex justify-end'>
            {selected_hat === hat ? 
                <button className = 'btn-select' 
                        onClick={() => dispatch(resetHat())}> 
                        Unselect 
                </button> :
                <button className = 'btn-select' 
                        onClick={() => dispatch(selectHat(hat))}> 
                        Select this hat 
                 </button>
            }
            </div> 
        </Card>
            

      </div>
  
  );
};

export default HatCard;
