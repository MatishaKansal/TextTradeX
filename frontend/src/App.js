import logo from './logo.svg';
import './App.css';
import Signup from './Signup/Signup';
import Login from './Login/Login';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Login/>} />
          <Route path="/signup" element={< Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
