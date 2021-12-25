import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../HomePage";
import Portfolio from "../Portfolio";
import Curriculo from "../Curriculo";

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