import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import EventDetail from './components/EventDetail';
import Checkout from './components/Checkout';
import EventCreate from './components/EventCreate';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';

function App() {
    return (
        <Router>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/create" element={<EventCreate />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/login" element={<UserLogin />} />
            </Routes>
        </Router>
    );
}

export default App;
