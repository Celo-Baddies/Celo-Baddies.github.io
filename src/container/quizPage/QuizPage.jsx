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
  localStorage.setItem('score', 0)

  const navigate = useNavigate()
  const [answerWrong, setAnswerWrong] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  let getAnswer = JSON.parse(localStorage.getItem('score'))
  console.log(getAnswer + 2)

  function checkAnswer(e) {
    let options = document.getElementsByClassName('options')
    for (let i = 0; i < options.length; i++) {
      let answer = options[i]
      if (answer.className === 'correct') {
        setIsModalOpen(true)
        setAnswerWrong(false)
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
        <h2>What is blockchain technology?</h2>

        <ul className='options'>
          <li className='correct'>
            {' '}
            <img src={Q1A} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='not-correct' onClick={checkAnswer}>
            <img src={Q1B} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='not-correct' onClick={checkAnswer}>
            <img src={Q1C} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='not-correct' onClick={checkAnswer}>
            <img src={Q1D} alt='' onClick={() => setIsModalOpen(true)} />
          </li>
        </ul>
      </div>

      {answerWrong ? (
        <div className='modal'>
          <div className='modal-overlay' onClick={closeModal} />
          <div className='modal-content'>
            <div className='modal-close' onClick={closeModal}></div>
            <img src={images.fail} alt='' onClick={() => navigate('/quiz2')} />
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
              onClick={() => navigate('/quiz2')}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default QuizPage
