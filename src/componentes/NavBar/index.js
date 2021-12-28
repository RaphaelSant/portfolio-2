import React from "react";
import "./estilo.css"
import Profile from "../../assets/imagens/profile.png";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-navbar fixed-top">
                <div className="container">
                    <Link to="/" className="rms d-flex align-items-center">
                        <img src={Profile} alt="Imagem de Perfil" className="img-navbar mr-4"/>
                        <p className="rms">Raphael Santiago</p>
                    </Link>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
                        <ul class="navbar-nav">
                                <li class="nav-item p-2">
                                    <Link to="/" className="nav-link text-light">Página Inicial</Link>
                                </li>
                                <li class="nav-item p-2">
                                    <Link to="/portfolio" className="nav-link text-light">Portfólio</Link>
                                </li>
                                <li class="nav-item p-2">
                                    <Link to="/curriculo" className="nav-link text-light">Currículo</Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;