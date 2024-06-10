import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './componnents/Add';
import View from './componnents/View';

function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Add/>}/>
    <Route path='/View' element={<View/>}/>
    
  </Routes>
 </BrowserRouter>
  );
}

export default App;
