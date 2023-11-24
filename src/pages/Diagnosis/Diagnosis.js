import React, { useState } from 'react'
import axios from 'axios'
import Navigation from '../../components/Navigation/Navigation'
import { DiagnoseWrap } from './Diagnosis.style'
import { Button } from '../../components/Button/Button'

const Diagnosis = () => {

    const [ask, setAsk] = useState({
        message: ''
    })

    const baseURL = "https://klusterthon-backend.onrender.com/api/diagnose"

    const asktheBot = (e) => {
        setAsk({...ask, [e.target.name]: e.target.value})
        console.log(ask.message)
    }

    // useEffect(()=>{
    //     axios.post(baseURL, { message: ask.message })
    //     .then((response)=>{
    //         console.log(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }, [ask])

    const handleSubmit = () => {
        axios.post(baseURL, { message: ask.message })
            .then((response) => {
                console.log(response.data.message);
                alert(response.data.message);
            })
            .catch(error => {
                console.log(error);
            });
    };

    console.log(ask.message)

  return (
    <div>
        <Navigation />
        <DiagnoseWrap>
            <div className="diagnoseBoard">
                <p>Welcome back, Femi!</p>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <h3>Symptoms Description</h3>
                    <input type="text" 
                    value={ask.message} 
                    name='message'
                    onChange={asktheBot} 
                    placeholder='E.g. 28 year old woman with persistent coughing and high body temperature ' />
                    <p>0/2000</p>
                    <button onClick={handleSubmit}></button>
                    <Button btn='Submit' onClick={handleSubmit} />
                </form>
            </div>
        </DiagnoseWrap>
    </div>
  )
}

export default Diagnosis