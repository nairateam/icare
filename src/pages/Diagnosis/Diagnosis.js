import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../../components/Navigation/Navigation';
import bot from '../../assets/bot.png';
import { DiagnoseWrap, ResponseWrap } from './Diagnosis.style';
import { Button } from '../../components/Button/Button';
import { auth } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const Diagnosis = () => {
  const [ask, setAsk] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()
  const user = auth.currentUser
  const userEmail = user ? user.email : '';

  const baseURL = "https://klusterthon-backend.onrender.com/api/diagnose";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(baseURL, { message: ask });
      const detail = response.data.data.message;
      console.log(detail);
      setResponse(detail);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  if(!user) {
    return navigate('/login')
  }
  return (
        <div>
          <Navigation />
          <DiagnoseWrap>
            <div className="diagnoseBoard">
            <p>Welcome back, {userEmail || 'Guest'}!</p>
              <form action="" onSubmit={handleSubmit}>
                <h3>Symptoms Description</h3>
                <input
                  type="text"
                  value={ask}
                  onChange={(e) => setAsk(e.target.value)}
                  placeholder="E.g. 28 year old woman with persistent coughing and high body temperature "
                />
                <p>0/2000</p>
                <Button type="submit" btn="Submit" />
              </form>
            </div>
          </DiagnoseWrap>
          {!isLoading && response.length === 0 ? (
            <div className="pendChat">
                <h2>Please Ask Your Questions</h2>
            </div>
          ) : (
            <ResponseWrap>
              <div className="aiChat">
                <span>
                  <img src={bot} alt="Bot Assistant" />
                  <h5>{response.role}</h5>
                </span>
                {isLoading ? <p>Please hang on...</p> : <p>{response.content}</p>}
              </div>
            </ResponseWrap>
          )}
        </div>
      );
  
};

export default Diagnosis;
