import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Curriculo() {
    return(
        <>
            <h1>Este é o Curriculo</h1>
            <Link to="/" >Voltar</Link>
            <Footer />
        </>
    );
}

export default Curriculo;