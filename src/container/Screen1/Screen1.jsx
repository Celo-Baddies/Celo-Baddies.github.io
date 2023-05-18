import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { images } from '../../constants'
import './Screen1.css'
import ConnectBtn from '../../components/connect/ConnectBtn'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { getAccount } from '@wagmi/core'

const Connect = () => {
  const navigate = useNavigate()
  const account = getAccount()
  const { address, isConnected, isDisconnected } = account

  return (
    <div
      className='body_app app__landing app__wrapper section__padding'
      id='connect'
    >
      <div className='navbar'>
        <div className='app__navbar-log'>
          <Link to={'/'}>
            <p className='app__navbar_text_logo'>Baddie</p>
          </Link>
        </div>

        <div className=''>
          <div style={{ display: isDisconnected ? 'none' : 'block' }}>
            <ConnectButton />
          </div>

          <div style={{ display: isDisconnected ? 'block' : 'none' }}>
            <img className='app__navbar-text-logo' src={images.wallet} />
          </div>
        </div>
      </div>
      <div className='app_landing_info'>
        <h1 className='app_landing_text1'>Connect Wallet</h1>
        <h1 className='app_landing_text2'>Connect your metamask wallet </h1>
        {/* <br /> */}
        <h1 className='app_landing_text3' style={{ margin: '2rem 0' }}>
          By connecting your wallet you agree to our Terms of Service and
          Privacy Policy.
        </h1>
        {/* <img src={images.connectwalletbtn} style={{ cursor: 'pointer' }} /> */}
        <ConnectBtn />
        {!!address ? (
          <Link to='/welcome-onboard'>
            <button className='proceed'>Proceed</button>
          </Link>
        ) : null}

        {/* <button type='button' className='app_landing_btn' onClick={() => navigate('connect-wallet')}>Connect Wallet</button> */}
      </div>
    </div>
  )
}

export default Connect
