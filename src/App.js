import { Routes, Route } from 'react-router-dom'
import {
  Screen1,
  Welcome,
  Footer,
  Gallery,
  Landing,
  SpecialMenu,
} from './container'
import { Navbar } from './components'
import './App.css'
import PickTopic from './container/pickTopic/PickTopic'
import ChatScreen from './container/chatScreen/ChatScreen'
import QuizPage from './container/quizPage/QuizPage'
import QuizMint from './container/quizMint/QuizMint'
import Category from './container/Category/category'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='connect-wallet' element={<Screen1 />} />
        <Route path='welcome-onboard' element={<Gallery />} />
        <Route path='category' element={<Category />} />
        <Route path='pick-topic' element={<PickTopic />} />
        <Route path='chat' element={<ChatScreen />} />
        <Route path='quiz' element={<QuizPage />} />
        <Route path='certificate' element={<QuizMint />} />
        {/* <Route path='*' element={ } /> */}
      </Routes>
    </>
  )
}

export default App
