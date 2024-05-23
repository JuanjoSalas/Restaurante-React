import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reserve from "./components/Reserve/Reserve";
import Menu from "./components/Menu/Menu";



function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Reserve" element={<Reserve/>}/>
      <Route path="/Menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
