import {Routes, Route, Link} from "react-router-dom";

import './App.css';
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
