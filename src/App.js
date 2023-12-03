import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Show from './components/Show';
import Update from './components/Update';
import Delete from './components/Delete';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/add' element={<Add/>} ></Route>
  <Route path='/show' element={<Show/>} ></Route>
  <Route path='/update/:studentId' element={<Update/>} ></Route>
  <Route path='/delete/:studentId' element={<Delete/>} ></Route>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
