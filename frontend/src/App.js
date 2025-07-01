import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Pages/Home/Home';
import UserDetail from './Pages/UserDetail/UserDetail';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserDetail" element={<UserDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
