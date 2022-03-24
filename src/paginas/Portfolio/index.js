import React from "react";
import smoothscroll from "../../componentes/ScrollToTop.js";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/NavBar";
import "./estilo.css";
import Projeto from "../../assets/imagens/Projeto.jpg";

import SDS2 from "../../assets/projetos/DsDelivery.PNG";
import PousadaSecreta from "../../assets/projetos/PousadaSecreta.PNG";
import PrimeiroPortifolio from "../../assets/projetos/PrimeiroPortifolio.PNG";
import SDS3 from "../../assets/projetos/DsVendas.PNG";
import CriandoRotas from "../../assets/projetos/CriandoRotas.PNG";
import CaminhoDoSaber from "../../assets/projetos/CaminhoDoSaber.PNG";
import FrutaEFruto from "../../assets/projetos/FrutaEFruto.PNG";
import Helmet from 'react-helmet';

function Portfolio() {
    return (
        <>
            <Helmet title="Raphael Santiago - Portfólio" />
            {smoothscroll()}
            <Navbar />

            <div className="bd-example carousel-estilo">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="1500">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={SDS2} className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src={PousadaSecreta} className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src={PrimeiroPortifolio} className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src={SDS3} className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src={CriandoRotas} className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src={CaminhoDoSaber} className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src={FrutaEFruto} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className="mt-4 container-fluid">
                <h1 className="port-titulo text-center">Projetos no GitHub</h1>

                <div className="row justify-content-center mt-1">

                    
                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={SDS2} class="card-img-top" alt="Semana DevSuperior 2" />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">Semana DevSuperior 2</h5>
                                    <p className="card-text">Projeto elaborado na semana de conhecimento DevSuperior 2 com o professor Nélio Alves.</p>
                                </div>
                                <div>
                                    <a href="https://sds2-raphael-santiago.netlify.app/" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/dsdeliver-sds2" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={PousadaSecreta} class="card-img-top" alt="Pousada Secreta" />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">Pousada Secreta</h5>
                                    <p className="card-text">Site com objetivo didádico elaborado na plataforma DevMedia.</p>
                                </div>
                                <div>
                                    <a href="https://raphaelsant.github.io/PousadaSecreta/" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/PousadaSecreta" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={PrimeiroPortifolio} class="card-img-top" alt="..." />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">1° Portfólio</h5>
                                    <p className="card-text">O objetivo foi mostrar minhas habilidades e experiência na área de programação conquistados na época que desenvolvi.</p>
                                </div>
                                <div>
                                    <a href="https://raphaelsant.github.io/Portfolio/" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/Portfolio" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={SDS3} class="card-img-top" alt="..." />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">Semana DevSuperior 3</h5>
                                    <p className="card-text">Projeto elaborado na semana de conhecimento DevSuperior 3 com o professor Nélio Alves.</p>
                                </div>
                                <div>
                                    <a href="https://dsvendas-raphaelsantiago.netlify.app/" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/projeto-sds3" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={CriandoRotas} class="card-img-top" alt="..." />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">Criando Rotas ReactJS</h5>
                                    <p className="card-text">Criando rotas para navegação e troca de componentes no ReactJS.</p>
                                </div>
                                <div>
                                    <a href="https://criandorotas.netlify.app/" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/criando-rotas" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={Projeto} class="card-img-top" alt="..." />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">ByteBank - OO</h5>
                                    <p className="card-text">Curso de Orientação a Objetos com JavaScript - Alura.</p>
                                </div>
                                <div>
                                    <a href="https:www.google.com" className="btn btn-primary w-100 mt-2 disabled" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/ByteBank" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={Projeto} class="card-img-top" alt="Semana DevSuperior 2" />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">Ceep - Cadastro de Notas</h5>
                                    <p className="card-text">Sistema de cadastro de notas desenvolvido como aprendizado na Alura.</p>
                                </div>
                                <div>
                                    <a href="https://www.google.com" className="btn btn-primary w-100 mt-2 disabled" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/ceep" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={CaminhoDoSaber} class="card-img-top" alt="Pousada Secreta" />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">Caminho do Saber</h5>
                                    <p className="card-text">Site da Escola educacional inovadora Caminho do Saber.</p>
                                </div>
                                <div>
                                    <a href="https://caminhodosaber.netlify.app/" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/Caminho-do-Saber" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="card port-card p-0 m-4 col-12 col-md-4">
                            <img src={FrutaEFruto} class="card-img-top" alt="..." />
                            <div className="card-body flex-body-center">
                                <div className="card-content">
                                    <h5 className="card-title">Fruta & Fruto</h5>
                                    <p className="card-text">Site desenvolvido em aula na plataforma Alura tendo como aprendizado principal o Bootstrap 4.3.</p>
                                </div>
                                <div>
                                    <a href="https://raphaelsant.github.io/Fruta-e-Fruto/" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                    <a href="https://github.com/RaphaelSant/Fruta-e-Fruto" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                </div>
                            </div>
                        </div>

                </div>
                <h2 className="port-sub-titulo text-center mt-5 mb-5">Não existe sistema pronto, existe sistema abandonado!</h2>
            </div>

            <Footer />
        </>
    );
}

export default Portfolio;