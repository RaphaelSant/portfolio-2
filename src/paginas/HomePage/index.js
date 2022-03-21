import React from "react";
import "./estilo.css";
import Profile from "../../assets/imagens/profile.png";
import Curriculo from "../../assets/imagens/curriculo_icon.png";
import Portfolio from "../../assets/imagens/portfolio_icon.png";
import Footer from "../../componentes/Footer";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

function HomePage() {
    return (
        <>
            <Helmet title="Raphael Santiago - Página Inicial" />
            <div className="homepage d-flex flex-column justify-content-center align-items-center">
                <div className="glass p-4 m-3">
                    <img src={Profile} alt="Imagem de perfil" className="profile" />
                    <p className="m-4 texto">Olá mundo! Eu sou Raphael Santiago</p>
                    <Link to="/portfolio" className="link">
                        <div className="cardHP"><img src={Portfolio} alt="" className="imgCard mr-2" /> Portfólio</div>
                    </Link>
                    <Link to="/curriculo" className="link">
                        <div className="cardHP"> <img src={Curriculo} alt="" className="imgCard mr-2" /> Curriculo</div>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default HomePage;