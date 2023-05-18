import React from 'react'
import { useNavigate } from 'react-router-dom'

import { images } from '../../constants'

import './welcome-onboard.css'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div
      className='body_about app_landing app__wrapper section__padding'
      id='welcome'
    >
      <div className='navbar'>
        <div className='app__navbar-log'>
          <p className='app__navbar_text_logo'>Baddie</p>
        </div>

        <div className='app__navbar-login'>
          <img
            src={images.wallet}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('connect-wallet')}
          />
        </div>
      </div>
      <div className='app_landing_info'>
        <h1 className='app_landing_text1'>Welcome Onboard</h1>
        <h1 className='app_landing_text2'>Connect your metamask wallet</h1>
        {/* <br /> */}
        <h1 className='app_landing_text3' style={{ margin: '2rem 0' }}>
          By connecting your wallet you agree to our Terms of Service and
          Privacy Policy.
        </h1>
        {/* <img
          src={images.connectwalletbtn}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('connect-wallet')}
        /> */}

        {/* <button type='button' className='app_landing_btn' onClick={() => navigate('connect-wallet')}>Connect Wallet</button> */}
      </div>
      {/* <img src={images.bggg} className='app_landing_img' alt="header img"/> */}
    </div>
  )
}

export default Welcome
