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
import QuizePage5 from './container/quizPage5/QuizPage'
import QuizePage2 from './container/quizPage2/QuizPage'
import QuizePage3 from './container/quizPage3/QuizPage'
import QuizePage4 from './container/quizPage4/QuizPage'

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
        <Route path='quiz5' element={<QuizePage5 />} />
        <Route path='quiz2' element={<QuizePage2 />} />
        <Route path='quiz3' element={<QuizePage3 />} />
        <Route path='quiz4' element={<QuizePage4 />} />


        {/* <Route path='*' element={ } /> */}
      </Routes>
    </>
  )
}

export default App
