  import { useEffect, useRef, useState } from 'react'; 
  import {BrowserRouter, Routes, Route} from 'react-router-dom';
  import Mywork from './pages/mywork';
  import Myinfo from './pages/myinfo';
  import './App.css';
  import Home from './pages/home';
  import Work from './components/work';
  function App() {
    return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/work" element={<Mywork/>} />
      <Route path="/info" element={<Myinfo/>} />
    </Routes>
    </BrowserRouter>
    )
}
  export default App;
