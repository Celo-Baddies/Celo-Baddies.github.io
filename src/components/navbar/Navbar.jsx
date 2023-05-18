import React from 'react'
import { images } from '../../constants'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { getAccount } from '@wagmi/core'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Navbar() {
  const navigate = useNavigate()
  const account = getAccount()
  const { address, isDisconnected } = account

  return (
    <div className='topNav'>
      <div className='topNavInner'>
        <h2 onClick={() => navigate('/pick-topic')}>Baddie</h2>

        <div className=''>
          <div style={{ display: isDisconnected ? 'none' : 'block' }}>
            <ConnectButton />
          </div>

          <div style={{ display: isDisconnected ? 'block' : 'none' }}>
            <img className='app__navbar-text-logo' src={images.wallet} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
