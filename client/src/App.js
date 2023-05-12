import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login folder/login'
import MainPage from './pages/MainPage/MainPage'

function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<MainPage />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
