import React from 'react'
import { images } from '../../constants';
import './navbar.css'
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate()
    return (
        <div className='topNav'>
            <div className="topNavInner">
                <h2 onClick={() => navigate('/pick-topic')}>Baddie</h2>
                <img src={images.wallet} alt="" />
            </div>
        </div>
    )
}

export default Navbar