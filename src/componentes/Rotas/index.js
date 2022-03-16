import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../paginas/HomePage";
import Portfolio from "../../paginas/Portfolio";
import Curriculo from "../../paginas/Curriculo";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <HomePage /> } />
                <Route path='/portfolio' element={ <Portfolio /> } />
                <Route path='/curriculo' element={ <Curriculo /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;