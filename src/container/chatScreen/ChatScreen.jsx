import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './chatScreen.css'


function ChatScreen() {

    // navigate 
    const navigate = useNavigate()

    // useState to handle Stepper change
    const [stepper, setStepper] = useState(0)


    // Function to scroll to the bottom of the page
    function scrollToBottom() {
        const currentPosition = window.pageYOffset;
        const targetPosition = document.body.scrollHeight - window.innerHeight;
        const distance = targetPosition - currentPosition;
        const duration = 1000; // in milliseconds

        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const scrollY = currentPosition + distance * (progress / duration);
            window.scrollTo(0, scrollY);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }


    useEffect(() => {
        if (stepper === 3) {
            // Call the function to scroll to the bottom of the page
            scrollToBottom()
        }
    }, [stepper])



    return (
        <div className={`chatscreen-container ${stepper === 0 ? 'chatscreenend' : 'chatscreenstart'}`}>
            <Navbar />
            {stepper === 0 &&
                <div className="chatscreen-inner">
                    <button className='button' onClick={() => setStepper(1)}>Let's get started</button>
                </div>
            }
            {!stepper == 0 && <div className="chatscreen-chats">
                {stepper >= 1 &&
                    <div className="animate__animated animate__fadeInUp chatscreenstart right">
                        <div className="chatscreen-chatitem">
                            Let's get started
                        </div>

                    </div>
                }
                {stepper >= 1 &&
                    <div className="animate__animated animate__fadeInUp animate__delay-2s chatscreenstart left">
                        <div className="chatscreen-chatitem">
                            Introduction to blockchain technology
                        </div>

                    </div>
                }
                {stepper >= 2 &&
                    <div className="animate__animated animate__fadeInUp chatscreenstart right">
                        <div className="chatscreen-chatitem">
                            What is Blockchain technology
                        </div>

                    </div>
                }
                {stepper >= 2 &&
                    <div className="animate__animated animate__fadeInUp animate__delay-2s chatscreenstart left">
                        <div className="chatscreen-chatitem">
                            Before the emergence of blockchain technology, financial institutions like banks have always been the ultimate source of power for money control and  investments.  However, research from the world bank financial inclusion rate says that only 69% of adults - 3.8 billion people have a bank account globally.
                        </div>

                    </div>
                }
                {stepper >= 3 &&
                    <div className="animate__animated animate__fadeInUp chatscreenstart right">
                        <div className="chatscreen-chatitem">
                            History of blockchain technology
                        </div>

                    </div>
                }
                {stepper >= 3 &&
                    <div className="animate__animated animate__fadeInUp animate__delay-2s chatscreenstart left">
                        <div className="chatscreen-chatitem">
                            Before the emergence of blockchain technology, financial institutions like banks have always been the ultimate source of power for money control and  investments.  However, research from the world bank financial inclusion rate says that only 69% of adults - 3.8 billion people have a bank account globally.
                        </div>

                    </div>
                }
                {stepper >= 3 &&
                    <div className="animate__animated animate__fadeInUp animate__delay-3s chatscreenstart left">
                        <div className="chatscreen-chatitem" style={{ marginBottom: '150px' }}>
                            Let's take a quick quiz now that you are familiar with blockchain technology.
                        </div>

                    </div>
                }




            </div>}

            {stepper === 1 && <div className="lowerButton ">
                <div className="lowerButtonInner">
                    <div className="animate__animated animate__fadeInUp animate__delay-3s">
                        <button className='button' onClick={() => setStepper(2)}>What is Blockchain technology?</button>
                    </div>
                </div>
            </div>}
            {stepper === 2 && <div className="lowerButton ">
                <div className="lowerButtonInner">
                    <div className="animate__animated animate__fadeInUp animate__delay-3s">
                        <button className='button' onClick={() => setStepper(3)}>History of blockchain technology</button>
                    </div>
                </div>
            </div>}
            {stepper === 3 && <div className="lowerButton ">
                <div className="lowerButtonInner">
                    <div className="animate__animated animate__fadeInUp animate__delay-5s lowerButtonFlex" >
                        <button className='button' onClick={() => setStepper(0)} style={{ marginRight: '25px' }}>Retake Course</button>
                        <button className='button' onClick={() => navigate('/quiz')}>Take Quiz</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ChatScreen