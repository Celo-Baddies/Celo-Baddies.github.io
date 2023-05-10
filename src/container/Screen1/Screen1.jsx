import React from 'react';
import { useNavigate } from 'react-router-dom';

import { images }from '../../constants';
import './Screen1.css';
const Connect = () => {
    const navigate = useNavigate();

   return(
   <div className='body_app app__landing app__wrapper section__padding' id='connect'>
    <div className="navbar">
    <div className='app__navbar-log'>
      <p className='app__navbar-text-logo'>Baddie</p>
    </div>
  
    <div className='app__navbar-login'>
    <img className='app__navbar-text-logo' src={images.wallet}/>

    </div>
    </div>
   <div className='app_landing_info'>
   <h1 className='app_landing_text1'>Connect Wallet</h1>
   <h1 className='app_landing_text2'>Connect your metamask wallet </h1>
   {/* <br /> */}
   <h1 className='app_landing_text3' style={{margin: '2rem 0'}}>By connecting your wallet you agree to our Terms of Service and Privacy Policy.
</h1>
  <img src={images.connectwalletbtn} style={{cursor: 'pointer'}}onClick={() => navigate('connect-wallet')}/>

    {/* <button type='button' className='app_landing_btn' onClick={() => navigate('connect-wallet')}>Connect Wallet</button> */}
    </div>

   </div>

);
};
  

export default Connect;