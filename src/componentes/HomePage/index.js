import React from "react";
import "./estilo.css";
import Profile from "../../assets/imagens/profile.png";
import Puzzle from "../../assets/imagens/Puzzle_Icon.png";
import Rocket from "../../assets/imagens/Rocket_Icon.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function HomePage () {
    return (
        <>
            <div className="homepage d-flex flex-column justify-content-center align-items-center">
                <img src={Profile} alt="Imagem de perfil" className="profile" />
                <p className="texto">Olá mundo! Eu sou Raphael Santiago</p>
                <Link to="/portfolio" className="link">
                    <div className="cardHP"><img src={Rocket} alt="" className="imgCard" /> Portfólio</div>
                </Link>
                <Link to="/curriculo" className="link">
                    <div className="cardHP"> <img src={Puzzle} alt="" className="imgCard" /> Curriculo</div>
                </Link>
            </div>

            <Footer />
        </>
    );
}

export default HomePage;