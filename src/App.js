import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Diagnosis from './pages/Diagnosis/Diagnosis';
import { AuthProvider } from './pages/Auth/Context';
import {useState, useEffect} from 'react'
import {auth} from './FirebaseConfig'
import {onAuthStateChanged} from 'firebase/auth'
import Footer from './components/Footer/Footer';
// import ProtectedRoute from './pages/Auth/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState('Femi')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  
  return (
    <>
    <AuthProvider value={currentUser}>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
            <Route path='/diagnosis' element={
                <Diagnosis />
            } />
      </Routes>
      <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
