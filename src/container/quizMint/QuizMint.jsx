import React from 'react'
import certificate from '../../assets/certificate.png'
import mintbutton from '../../assets/mintbutton.png'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

import './quizmint.css'

function QuizMint() {
    const navigate = useNavigate()
    return (
        <div className="quizmint-container">
            <Navbar />
            <div className="quizmint-inner">
                <h2>CONGRATULATIONS!</h2>
                <p>You’ve received a certificate</p>

                <img src={certificate} alt="" onClick={() => navigate('/chat')} />
                <button><img src={mintbutton} alt="" /></button>
            </div>
        </div>
    )
}

export default QuizMint