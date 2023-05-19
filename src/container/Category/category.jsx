import React from 'react'
import leve1 from '../../assets/level1.png'
import level2 from '../../assets/level2.png'
import level3 from '../../assets/level3.png'
import level4 from '../../assets/level4.png'
import level5 from '../../assets/level5.png'
import level6 from '../../assets/level6.png'

import './category.css'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function Category() {
  const navigate = useNavigate()
  return (
    <div className='picktopic-container'>
      <Navbar />

      <div className='picktopic-inner'>
        <h2>Select Category</h2>
        <div className='picktopic-inn'>
          <img src={leve1} alt='' onClick={() => navigate('/pick-topic')} />
          <img src={level2} alt='' onClick={() => navigate('/Category')} />
          <img src={level3} alt='' onClick={() => navigate('/Category')} />
          <img src={level4} alt='' onClick={() => navigate('/Category')} />
          <img src={level5} alt='' onClick={() => navigate('/Category')} />
          <img src={level6} alt='' onClick={() => navigate('/Category')} />
        </div>
      </div>
    </div>
  )
}

export default Category
