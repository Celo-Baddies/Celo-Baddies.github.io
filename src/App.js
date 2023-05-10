import { Routes, Route } from 'react-router-dom';
import { Screen1, Welcome, Footer, Gallery, Landing, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="/connect-wallet" element={<Screen1 />} />
           <Route path="/welcome" element={<Welcome />} />
           <Route path='*' element={<Gallery />} />
        </Routes>
     </>
  );
 };

export default App;
