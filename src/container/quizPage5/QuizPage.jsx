import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  let totalPoints = 0

  function checkAnswer(e) {
    let options = document.getElementsByClassName('options')
    for (let i = 0; i < options.length; i++) {
      let answer = options[i]
      if (answer.className === 'correct') {
        totalPoints += 2
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
        <h2>Which of the following describes Immutability in blockchain?</h2>

        <ul className='options'>
          <li className='not-correct' onClick={checkAnswer}>
            {' '}
            <img src={images.q5a} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='not-correct' onClick={checkAnswer}>
            <img src={images.q5b} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='correct'>
            <img src={images.q5c} alt='' onClick={() => setIsModalOpen(true)} />
          </li>

          <li className='not-correct' onClick={checkAnswer}>
            <img src={images.q5d} alt='' onClick={() => setIsModalOpen(true)} />
          </li>
        </ul>
      </div>

      {answerWrong ? (
        <div className='modal'>
          <div className='modal-overlay' onClick={closeModal} />
          <div className='modal-content'>
            <div className='modal-close' onClick={closeModal}></div>
            <img
              src={images.fail}
              alt=''
              onClick={() => navigate('/certificate')}
            />
          </div>
        </div>
      ) : null}

      {isModalOpen ? (
        <div className='modal'>
          <div className='modal-overlay' onClick={closeModal} />
          <div className='modal-content'>
            <div className='modal-close' onClick={closeModal}></div>
            <img
              src={images.correct}
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
