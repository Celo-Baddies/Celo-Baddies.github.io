import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Q1A from '../../assets/Q1A.png'
import Q1B from '../../assets/Q1B.png'
import Q1C from '../../assets/Q1B.png'
import Q1D from '../../assets/Q1D.png'
import { images } from '../../constants'
import Navbar from '../../components/navbar/Navbar'
import './quizpage.css'

function QuizPage() {
  const navigate = useNavigate()
  const [answerWrong, setAnswerWrong] = useState(false)
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

  function checkAnswer(e) {
    let totalPoints = 0
    let options = document.getElementsByClassName('options')
    for (let i = 0; i < options.length; i++) {
      let answer = options[i]
      if (answer.className === 'correct') {
        totalPoints = totalPoints + 2
        setIsModalOpen(true)
        setAnswerWrong(false)
        console.log(totalPoints)
      } else if ((answer.className = 'not-correct')) {
        setAnswerWrong(true)
        setIsModalOpen(false)
      }
    }
  }

  return (
    <div className='quizpage-container'>
      <Navbar />
      <div className='quizpage-inner'>
        <h2>
          Before the emergence of blockchain technology, ________ like banks
          have always been the ultimate source of power for money control and
          investments.
        </h2>

        <ul className='options'>
          <li className='correct'>
            <img src={images.q4a} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='not-correct' onClick={checkAnswer}>
            <img src={images.q4b} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='not-correct' onClick={checkAnswer}>
            <img src={images.q4c} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='not-correct' onClick={checkAnswer}>
            <img src={images.q4d} alt='' onClick={() => setIsModalOpen(true)} />
          </li>
        </ul>
      </div>

      {answerWrong ? (
        <div className='modal'>
          <div className='modal-overlay' onClick={closeModal} />
          <div className='modal-content'>
            <div className='modal-close' onClick={closeModal}></div>
            <img src={images.fail} alt='' onClick={() => navigate('/quiz5')} />
          </div>
        </div>
      ) : null}

      {isModalOpen ? (
        <div className='modal'>
          <div className='modal-overlay' onClick={closeModal} />
          <div className='modal-content'>
            <div className='modal-close' onClick={closeModal}></div>
            <img
              src={images.points}
              alt=''
              onClick={() => navigate('/quiz5')}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default QuizPage
