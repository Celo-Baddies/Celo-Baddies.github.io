import React, { useState } from 'react'
import certificate from '../../assets/certificate.png'
import mintbutton from '../../assets/mintbutton.png'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import './quizmint.css'
import { CONTRACT_ADDRESS } from '../../constants'
import contractABI from '../../utils/BaddieGame.json'
import { prepareWriteContract, writeContract } from '@wagmi/core'

function QuizMint() {
  const navigate = useNavigate()
  const [err, setErr] = useState(false)

  const mintToken = async () => {
    try {
      const { hash } = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: 'getlevel1Tokens',
        args: [8, 'bbd'],
      })
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  }

  return (
    <div className='quizmint-container'>
      <Navbar />
      <div className='quizmint-inner'>
        <h2>CONGRATULATIONS!</h2>
        <p>You’ve received a certificate and 80 BADDIETOKEN</p>

        <img src={certificate} alt='' onClick={() => navigate('/chat')} />
        <button onClick={mintToken}>
          <img src={mintbutton} alt='' />
        </button>

        {!err ? (
          <h1 style={{ color: 'red', marginTop: '50px' }}>
            LEVEL COMPLETED: Try level 2...
          </h1>
        ) : null}
      </div>
    </div>
  )
}

export default QuizMint
