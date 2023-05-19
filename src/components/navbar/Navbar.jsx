import React, { useEffect, useState } from 'react'
import { images } from '../../constants'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { getAccount } from '@wagmi/core'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ERC20_CONTRACT_ADDRESS } from '../../constants/index.js'
import ERC20_ABI from '../../utils/erc20ABI.json'
import { readContract } from '@wagmi/core'
import { formatEther } from 'viem'

function Navbar() {
  const navigate = useNavigate()
  const account = getAccount()
  const { address, isDisconnected } = account
  const [bal, setBal] = useState(0)

  const getBalanceOf = async () => {
    let data = await readContract({
      address: ERC20_CONTRACT_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'balanceOf',
      args: [address],
    })

    data = formatEther(data)
    setBal(data)
  }

  useEffect(() => {
    getBalanceOf()
    console.log(bal)
  }, [bal])

  return (
    <div className='topNav'>
      <div className='topNavInner'>
        <h2 onClick={() => navigate('/pick-topic')}>Baddie</h2>

        <div className=''>
          <div style={{ display: isDisconnected ? 'none' : 'block' }}>
            <ConnectButton />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '30px',
                position: 'relative',
              }}
            >
              <img
                src={images.bdt}
                alt=''
                width={'30px'}
                style={{
                  position: 'absolute',
                  left: '90px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  // position: 'relative',
                }}
              >
                <img src={images.nav_rec} alt='' width={'150px'} />
                <h4
                  style={{
                    paddingRight: '20px',
                    position: 'absolute',
                    top: '4px',
                    right: '50px',
                    color: '#FFF',
                  }}
                >
                  {bal}
                </h4>
              </div>

              <img
                src={images.learner}
                alt=''
                width={'30px'}
                style={{
                  position: 'absolute',
                  right: '90px',
                }}
              />
            </div>
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
