import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { InnerLog, LogWrap } from './Login.style'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faComment } from '@fortawesome/free-solid-svg-icons'
import { SmallBtn } from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../../FirebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'
// import { useAuthValue } from './Context'

const Signup = ({btn}) => {
    
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState();

    navigate = useNavigate();

    // Confirms if passwords are the same
    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
          if (password !== confirmPassword) {
            isValid = false
            setError('Passwords does not match')
            alert('passwords do not match!');
          }
        }
        return isValid
      }

    // const {currentUser} = useAuthValue;
    // alert(currentUser);
    
    // Register User and sends to firebase.
    const register = e => {
        e.preventDefault()
        setError('')
        if(validatePassword()) {
          // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user)
              })
            .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        navigator('/diagnosis');
      }

  return (
    <div>
        <Navigation />
        <LogWrap>
            <InnerLog>
                <h3>User Registration</h3>
                <form onSubmit={register} name='registration_form'>
                    <div className="formControl">
                        <label>Username</label>
                        <input type="text" 
                        name="" 
                        value={displayName}
                        onChange={(e)=>setDisplayName(e.target.value)}
                        placeholder="Enter your email" />
                    </div>
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
                    <div className="formControl">
                        <label>Confirm Password</label>
                        <input type="password" 
                        name="" 
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        placeholder="Confirm password" />
                    </div>
                    <p>{error}</p>
                    <div className="btnHolder">
                        <SmallBtn type='submit' btn="SIgn up"><Link to='/diagnosis'>{btn}</Link></SmallBtn>
                    </div>
                </form>
            </InnerLog>
        </LogWrap>
    </div>
  )
}

export default Signup