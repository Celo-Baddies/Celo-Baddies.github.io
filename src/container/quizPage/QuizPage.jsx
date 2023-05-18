import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Q1A from '../../assets/Q1A.png'
import Q1B from '../../assets/Q1B.png'
import Q1C from '../../assets/Q1B.png'
import Q1D from '../../assets/Q1D.png'

import passImg from '../../assets/pass.png'
import Navbar from '../../components/navbar/Navbar'
import './quizpage.css'

function QuizPage() {
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  function getPoint(correct, mark) {
    let point = 20
    if (correct) {
      return { mark }
    }
    return { mark }
  }

  return (
    <div className='quizpage-container'>
      <Navbar />
      <div className='quizpage-inner'>
        <h2>What is blockchain technology?</h2>

        <img
          className='correct'
          src={Q1A}
          alt=''
          onClick={() => setIsModalOpen(true)}
        />
        <img src={Q1B} alt='' onClick={() => setIsModalOpen(true)} />
        <img src={Q1C} alt='' onClick={() => setIsModalOpen(true)} />
        <img src={Q1D} alt='' onClick={() => setIsModalOpen(true)} />
      </div>

      {isModalOpen ? (
        <div className='modal'>
          <div className='modal-overlay' onClick={closeModal} />
          <div className='modal-content'>
            <div className='modal-close' onClick={closeModal}>
              ×
            </div>
            <img
              src={passImg}
              alt=''
              onClick={() => navigate('/certificate')}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default QuizPage
