import React from 'react'
import { useNavigate } from 'react-router-dom'

import { images } from '../../constants'
import './Landing.css'
const Header = () => {
  const navigate = useNavigate()

  return (
    <div
      className='body_app app_landing app__wrapper section__padding'
      id='home'
    >
      <div className='navbar'>
        <div className='app__navbar-log'>
          <p className='app__navbar-text-logo'>Baddie</p>
        </div>

        <div className='app__navbar-login'>
          <img src={images.wallet} />
        </div>
      </div>
      <div className='app_landing_info'>
        <h1 className='app_landing_text1'>Welcome to Baddie</h1>
        <h1 className='app_landing_text2'>
          Your gamified web3 educational platform
        </h1>
        {/* <br /> */}
        <h1 className='app_landing_text3'>
          To become a baddie, you need blockchain-related skills, knowledge and
          information to overcome the hurdles and make extra earnings in the
          blockchain jungle. 
        </h1>
        <p className='app_landing_text4' style={{ margin: '2rem 0' }}>
          To get started,{' '}
        </p>
        <img
          src={images.connectwalletbtn}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('connect-wallet')}
        />
      </div>
      <img src={images.bggg} className='app_landing_img' alt='header img' />
    </div>
  )
}

export default Header
