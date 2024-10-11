import {Routes, Route, Link} from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
