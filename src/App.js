import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Diagnosis from './pages/Diagnosis/Diagnosis';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/diagnosis' element={<Diagnosis />} />
      </Routes>
    </>
  );
}

export default App;
