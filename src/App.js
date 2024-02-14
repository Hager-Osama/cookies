import HomePage from "./pages/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login/loginPage.js";
import RegisterPage from "./pages/auth/register/registerPage.js";
import Forgotpassword from "./pages/auth/login/forgotpassword.js";
import Resetpassword from "./pages/auth/login/resetpassword.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
