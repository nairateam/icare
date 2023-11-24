import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { InnerLog, LogWrap } from './Login.style'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faComment } from '@fortawesome/free-solid-svg-icons'
import { GoogleBtn, SmallBtn } from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Login = ({btn}) => {
  return (
    <div>
        <Navigation />
        <LogWrap>
            <InnerLog>
                <h3>User Signin</h3>
                <form>
                    <div className="formControl">
                        <label>Email</label>
                        <input type="email" name="" placeholder="Enter your email" />
                    </div>
                    <div className="formControl">
                        <label>Password</label>
                        <input type="password" name="" placeholder="Enter your password" />
                    </div>
                    <div className="btnHolder">
                        <SmallBtn btn="SIgn up"><Link>{btn}</Link></SmallBtn>
                    </div>
                    <a href='forgotPass' className="forgotPass">
                        forgot password
                    </a>
                    <span className="needAuth">
                        <p>  Need account?  <Link>Sign in</Link></p>
                    </span>
                    <GoogleBtn btn="Sign in with Google"> {btn} </GoogleBtn>
                </form>
            </InnerLog>
        </LogWrap>
    </div>
  )
}

export default Login