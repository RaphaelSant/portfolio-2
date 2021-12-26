import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavBar";
import "./estilo.css";

function Portfolio() {
    return (
        <>
        <Navbar />
        <div>
            <h1>Este é o Portfólio</h1>
            <Link to="/" >Voltar</Link>
        </div>
        <Footer />
        </>
    );
}

export default Portfolio;