import React from 'react';
import { BrowserRouter, Routes, Route as RRoute } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import NotFoundPage from './pages/NotFoundPage';
import NavbarMenu from "./components/NavbarMenu";
import './assets/styles/navbar.scss';

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavbarMenu/>
                <Routes>
                    <RRoute path="/" element={<Home />} />
                    <RRoute path="/list" element={<List />} />
                    <RRoute path="/detail/:id" element={<Detail />} />
                    {/* Defina outras rotas aqui */}
                    <RRoute path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
