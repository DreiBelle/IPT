import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login folder/login'
import NavBar from './pages/navbar/NavBar'
import Home from './pages/Home/Home'

function App() {
    return(
        <div>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
