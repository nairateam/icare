import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { InnerLog, LogWrap } from './Login.style'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faComment } from '@fortawesome/free-solid-svg-icons'
import { SmallBtn } from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Signup = ({btn}) => {
  return (
    <div>
        <Navigation />
        <LogWrap>
            <InnerLog>
                <h3>User Registration</h3>
                <form>
                    <div className="formControl">
                        <label>Username</label>
                        <input type="text" name="" placeholder="Enter your email" />
                    </div>
                    <div className="formControl">
                        <label>Email</label>
                        <input type="email" name="" placeholder="Enter your email" />
                    </div>
                    <div className="formControl">
                        <label>Password</label>
                        <input type="password" name="" placeholder="Enter your password" />
                    </div>
                    <div className="formControl">
                        <label>Confirm Password</label>
                        <input type="password" name="" placeholder="Confirm password" />
                    </div>
                    <div className="btnHolder">
                        <SmallBtn btn="SIgn up"><Link>{btn}</Link></SmallBtn>
                    </div>
                </form>
            </InnerLog>
        </LogWrap>
    </div>
  )
}

export default Signup