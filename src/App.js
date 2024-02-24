import HomePage from "./pages/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login/loginPage.js";
import RegisterPage from "./pages/auth/register/registerPage.js";
import Forgotpassword from "./pages/auth/login/forgotpassword.js";
import Resetpassword from "./pages/auth/login/resetpassword.js";
import ShoppingCartProvider from "./component/context/shoppingCartContext.js";
import Wishlist_data from "./component/wishlist/wishlist.data.js"
function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/wishlist" element={<Wishlist_data/>}/>
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
