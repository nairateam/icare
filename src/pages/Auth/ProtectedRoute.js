import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../FirebaseConfig';

const ProtectedRoute = () => {
    const navigate = useNavigate()

    const user = auth.currentUser;

    console.log("Check user in Private: ", user);
  if (!user) {
    return navigate('/login');
  }
  return <>Good</>;
};

export default ProtectedRoute