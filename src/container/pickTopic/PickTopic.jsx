import React from 'react'
import topic1 from '../../assets/picktopic1img.png'
import topic2 from '../../assets/picktopic2img.png'
import './picktopic.css'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function PickTopic() {
  const navigate = useNavigate()
  return (
    <div className='picktopic-container'>
      <Navbar />
      <div className='picktopic-inner'>
        <h2>Please, Pick a topic</h2>

        <img src={topic1} alt='' onClick={() => navigate('/chat')} />
        <img src={topic2} alt='' onClick={() => navigate('/chat')} />
      </div>
    </div>
  )
}

export default PickTopic
