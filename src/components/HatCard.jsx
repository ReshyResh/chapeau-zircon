import React from 'react';
import Icon from './Icon';
import { useSelector } from 'react-redux';
import { Card } from '@douyinfe/semi-ui';
import { useDispatch } from 'react-redux';
import { selectHat, resetHat } from '../Redux/reducers/hatsReducer';

const HatCard = (props) => {
    const { hat } = props;
    const selected_hat = useSelector((state) => state.hats.selected_hat);
    const dispatch = useDispatch();

  return (
      <button className='max-w-64'>
            <Card
                className= {`h-64 shadow-xl ${selected_hat === hat.color ? ' bg-purple-200 !text-white' : 'bg-white'}`}
                headerLine={ false }
                cover={<Icon color = {hat.color}/>}
            >
            {selected_hat === hat.color ? 
                <button className = 'btn-select' 
                        onClick={() => dispatch(resetHat())}> 
                        Unselect 
                </button> :
                <button className = 'btn-select' 
                        onClick={() => dispatch(selectHat(hat.color))}> 
                        Select this hat 
                </button> 
            }
        </Card>
            

      </button>
  
  );
};

export default HatCard;
