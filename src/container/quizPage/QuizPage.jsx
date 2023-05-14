import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import quizImg from '../../assets/quizImg.png'
import passImg from '../../assets/pass.png'
import Navbar from '../../components/navbar/Navbar'
import './quizpage.css'

function QuizPage() {
    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="quizpage-container">
            <Navbar />
            <div className="quizpage-inner">
                <h2>Introduction to blockchain technology</h2>

                <img src={quizImg} alt="" onClick={() => setIsModalOpen(true)} />
                <img src={quizImg} alt="" onClick={() => setIsModalOpen(true)} />
                <img src={quizImg} alt="" onClick={() => setIsModalOpen(true)} />
                <img src={quizImg} alt="" onClick={() => setIsModalOpen(true)} />
            </div>


            {isModalOpen ? <div className="modal">
                <div className="modal-overlay" onClick={closeModal} />
                <div className="modal-content">
                    <div className="modal-close" onClick={closeModal}>×</div>
                    <img src={passImg} alt="" onClick={() => navigate('/certificate')} />
                </div>
            </div> : null}

        </div>
    )
}

export default QuizPage