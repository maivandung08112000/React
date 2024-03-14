import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Login from './login/login';
import Layout from './layout/home';
import Register from './login/register';


function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Layout/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;