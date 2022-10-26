import React, { Component } from 'react';
import MenuRutas from './components/MenuRutas';
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import Customers from './components/Customers';
import Home from './components/Home';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuRutas/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/customers' element={<Customers/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}
