import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavBar";
import "./estilo.css";
import img1 from "../../assets/imagens/1.jfif";
import img2 from "../../assets/imagens/2.png";
import img3 from "../../assets/imagens/3.webp";
import Projeto from "../../assets/imagens/Projeto.jpg";

function Portfolio() {
    return (
        <>
            
            <Navbar />

            <div className="bd-example carousel-estilo">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block texto-carousel">
                                    <a href="https://www.google.com" target="_blank" rel="noreferrer">
                                    <h5>Projeto 1</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </a>
                                </div>
                            </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block texto-carousel">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block texto-carousel">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
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
            
            <div className="mt-4 container">
                <h1 className="port-titulo text-center">Projetos no GitHub</h1>
                
                <div className="text-light mt-1 ">
                
                    <div className="row justify-content-center">
                        <div className="col flex-center mt-4">
                            <div className="card port-card h-100">
                                <img src={Projeto} class="card-img-top" alt="..." />
                                <div className="card-body flex-body-center">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div>
                                        <a href="https:www.google.com" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                        <a href="https:www.google.com" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col flex-center mt-4">
                            <div className="card port-card h-100">
                                <img src={Projeto} class="card-img-top" alt="..." />
                                <div className="card-body flex-body-center">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div>
                                        <a href="https:www.google.com" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                        <a href="https:www.google.com" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col flex-center mt-4">
                            <div className="card port-card h-100">
                                <img src={Projeto} class="card-img-top" alt="..." />
                                <div className="card-body flex-body-center">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div>
                                        <a href="https:www.google.com" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                        <a href="https:www.google.com" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-100"></div>

                        <div className="col flex-center mt-4">
                            <div className="card port-card h-100">
                                <img src={Projeto} class="card-img-top" alt="..." />
                                <div className="card-body flex-body-center">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div>
                                        <a href="https:www.google.com" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                        <a href="https:www.google.com" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col flex-center mt-4">
                            <div className="card port-card h-100">
                                <img src={Projeto} class="card-img-top" alt="..." />
                                <div className="card-body flex-body-center">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div>
                                        <a href="https:www.google.com" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                        <a href="https:www.google.com" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col flex-center mt-4">
                            <div className="card port-card h-100">
                                <img src={Projeto} class="card-img-top" alt="..." />
                                <div className="card-body flex-body-center">
                                    <div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div>
                                        <a href="https:www.google.com" className="btn btn-primary w-100 mt-2" target="_blank" rel="noreferrer">Acessar Projeto</a>
                                        <a href="https:www.google.com" className="btn btn-dark w-100 mt-2" target="_blank" rel="noreferrer">Acessar GitHub</a>
                                    </div>
                                </div>
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