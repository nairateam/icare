import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { InnerLog, LogWrap } from './Login.style'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../FirebaseConfig'
import {useNavigate} from 'react-router-dom'
// import {useAuthValue} from './AuthContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faComment } from '@fortawesome/free-solid-svg-icons'
import { GoogleBtn, SmallBtn } from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Login = ({btn}) => {

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            navigate('/diagnosis')
          })
        .catch(err => setError(err.message))
      }      

  return (
    <div>
        <Navigation />
        <LogWrap>
            <InnerLog>
                <h3>User Signin</h3>
                <form onSubmit={login}>
                    <div className="formControl">
                        <label>Email</label>
                        <input type="email" 
                        name="" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter your email" />
                    </div>
                    <div className="formControl">
                        <label>Password</label>
                        <input type="password" 
                        name="" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder="Enter your password" />
                    </div>
                    <div className="btnHolder">
                        <SmallBtn type='submit' btn="SIgn in"><Link>{btn}</Link></SmallBtn>
                    </div>
                    <a href='forgotPass' className="forgotPass">
                        forgot password
                    </a>
                    <span className="needAuth">
                        <p>  Need account?  <Link to='/signup'>Sign up</Link></p>
                    </span>
                    <p>{error}</p>
                    <GoogleBtn btn="Sign in with Google"> {btn} </GoogleBtn>
                </form>
            </InnerLog>
        </LogWrap>
    </div>
  )
}

export default Login