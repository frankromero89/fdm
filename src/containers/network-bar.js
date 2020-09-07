import React, {Component} from 'react'
import FeatherIcon from 'feather-icons-react';
import LogoB from '../assets/images/logoBeers.png';

class barNW extends Component{

    render(){
        return(
            <div className='networks'>
                <div className='logosNW'>
                    <FeatherIcon  icon='facebook' size='20' />
                    <FeatherIcon  icon='twitter' size='20' />
                    <FeatherIcon className='ig'  icon='instagram' size='20' />
                </div>
                <div className='wordContact'>
                    <p className=''>Contacto</p>
                </div>
            </div>
        )
    }
}

export default barNW
