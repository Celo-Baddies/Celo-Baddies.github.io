import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { images } from '../../constants'

import './Gallery.css'
const WalletConnect = () => {
  const navigate = useNavigate()

  return (
    <div
      className='body_app app__landing app__wrapper section__padding'
      id='home'
    >
      <div className='navbar'>
        <div className='app__navbar-log'>
          <Link to={'/'}>
            <p className='app__navbar_text_logo'>Baddie</p>
          </Link>
        </div>

        <div className='app__navbar-login'>
          <img
            src={images.wallet}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('welcome-onboard')}
          />
        </div>
      </div>
      <div className='app_landing_info'>
        <h1 className='app_landing_text1'>Welcome Onboard</h1>
        {/* <br /> */}
        <h1
          className='app_landing_text3'
          style={{ margin: '1rem 0', fontSize: '20px', textAlign: 'center' }}
        >
          To become a baddie, you need blockchain-related skills, knowledge and
          information to overcome the hurdles and make extra earnings in the
          blockchain jungle.
        </h1>
        <img
          src={images.group4}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/pick-topic')}
        />

        {/* <button type='button' className='app_landing_btn' onClick={() => navigate('connect-wallet')}>Connect Wallet</button> */}
      </div>
      {/* <img src={images.bggg} className='app_landing_img' alt="header img"/> */}
    </div>
  )
}

export default WalletConnect
