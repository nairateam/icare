import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navigation.style';
import logo from '../../assets/icare.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../FirebaseConfig';
import { getAuth, signOut } from 'firebase/auth'; 

const Navigation = () => {
  const user = auth.currentUser;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      // You can also redirect the user or perform other actions after signout
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Navbar>
      <Link to="/">
        <img src={logo} alt="Icare" />
      </Link>
      <ul>
        <li>FAQs</li>
        <li>How to use</li>
        <li>Support</li>
      </ul>
      {user ? (
        <button onClick={handleSignOut}>
          Sign out <FontAwesomeIcon icon={faArrowRightToBracket} />
        </button>
      ) : (
        <Link to="/login">
          <button>
            Sign in <FontAwesomeIcon icon={faArrowRightToBracket} />
          </button>
        </Link>
      )}
    </Navbar>
  );
};

export default Navigation;
