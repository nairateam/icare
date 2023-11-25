import React, { useState } from 'react'
import axios from 'axios'
import Navigation from '../../components/Navigation/Navigation'
import bot from '../../assets/bot.png'
import { DiagnoseWrap, ResponseWrap } from './Diagnosis.style'
import { Button } from '../../components/Button/Button'

const Diagnosis = () => {

    const [ask, setAsk] = useState('')
    const [response, setResponse] = useState('')

    const baseURL = "https://klusterthon-backend.onrender.com/api/diagnose"

    // const asktheBot = (e) => {
    //     setAsk({...ask, [e.target.name]: e.target.value})
    //     console.log(ask.message)
    // }

    // useEffect(()=>{
    //     axios.post(baseURL, { message: ask.message })
    //     .then((response)=>{
    //         console.log(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }, [ask])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(baseURL, { message: ask })
            .then((response) => {
                const detail = response.data.data.message;
                console.log(detail);
                setResponse(detail);
            })
            .catch(error => {
                console.log(error);
            });
            alert(ask)
    };

  return (
    <div>
        <Navigation />
        <DiagnoseWrap>
            <div className="diagnoseBoard">
                <p>Welcome back, Femi!</p>
                <form action="" onSubmit={handleSubmit}>
                    <h3>Symptoms Description</h3>
                    <input type="text" 
                    value={ask.message} 
                    name='message'
                    onChange={(e)=>setAsk(e.target.value)} 
                    placeholder='E.g. 28 year old woman with persistent coughing and high body temperature ' />
                    <p>0/2000</p>
                    <Button type='submit' btn='Submit' />
                </form>
            </div>
        </DiagnoseWrap>
        {
            response.length === 0 ? <h2>Please Ask Your Questions</h2> : 
            <ResponseWrap>
            <div className="aiChat">
                <span>
                    <img src={bot} alt="Bot Assistant" /> 
                    <h5>{response.role}</h5>
                </span>
                <p>{response.content}</p>
            </div>
            </ResponseWrap>
        }
        
    </div>
  )
}

export default Diagnosis