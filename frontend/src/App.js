import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Pages/Home/Home';
import UserDetail from './Pages/UserDetail/UserDetail';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Sell from './Pages/Sell/Sell';
import Information from './Pages/Information/Information';
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ViewMore from './Pages/ViewMore/ViewMore';
import SearchPage from './Pages/SearchPage/SearchPage'
import Cart from './Pages/Cart/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserDetail" element={<UserDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/Sell" element={<Sell />} /> 
          <Route path="/Information" element={<Information />} /> 
          <Route path="/ViewMore/:id" element={<ViewMore />} /> 
          <Route path="/Search" element={<SearchPage />} /> 
          <Route path="/Cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
