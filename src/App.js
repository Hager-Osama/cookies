import HomePage from './pages/HomePage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/login/loginPage.js';
import RegisterPage from './pages/auth/register/registerPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
  