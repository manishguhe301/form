import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import ForgotPasswordPage from './components/Login/ForgotPasswordPage';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setTimeout(() => {
      setIsLoggedIn(false);
      document.title = 'Login';
    }, 500);
  };

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              isLoggedIn ? (
                <Navigate to='/form' />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route
            path='/form'
            element={
              isLoggedIn ? (
                <MultiStepForm onLogout={handleLogout} />
              ) : (
                <Navigate to='/' />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
