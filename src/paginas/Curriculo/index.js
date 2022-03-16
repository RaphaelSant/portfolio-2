import React from "react";
import "./estilo.css";
import Navbar from "../../componentes/NavBar"
import Footer from "../../componentes/Footer";
import smoothscroll from "../../componentes/ScrollToTop";
import Helmet from 'react-helmet';

function Curriculo() {
    
    return(
        <>
            <Helmet title="Raphael Santiago - Currículo" />
            {smoothscroll()}
            <Navbar />
            <div className="container mb-4">
                <div className="curriculo-titulo">
                    <h1 className="port-titulo text-center">Raphael Moura Santiago</h1>
                </div>

                <h2 className="curriculo-subtitulo mt-4">Habilidades</h2>

                <div class="row justify-content-center">
                    
                    <div class="col-sm-4 mt-4">
                        <div class="card h-100 cor-card">
                            <div class="card-body">
                                <h5 class="card-title text-center">Desenvolvimento</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item cor-card">ReactJS</li>
                                    <li class="list-group-item cor-card">Bootstrap 4.3</li>
                                    <li class="list-group-item cor-card">HTML/CSS</li>
                                    <li class="list-group-item cor-card">JavaScript</li>
                                    <li class="list-group-item cor-card">Git</li>
                                    <li class="list-group-item cor-card">PostGress</li>
                                    <li class="list-group-item cor-card">SQL</li>
                                </ul>
                            
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 mt-4">
                        <div class="card h-100 cor-card">
                            <div class="card-body">
                                <h5 class="card-title text-center">Em aprendizado</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item cor-card">Bibliotecas ReactJS</li>
                                    <li></li>
                                </ul>
                            
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 mt-4">
                        <div class="card h-100 cor-card">
                            <div class="card-body">
                                <h5 class="card-title text-center">Planos Futuros</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item cor-card">Node/Express</li>
                                    <li class="list-group-item cor-card">Java</li>
                                    <li class="list-group-item cor-card">React Native</li>
                                    <li></li>
                                </ul>
                            
                            </div>
                        </div>
                    </div>

                </div>

                <h2 className="curriculo-subtitulo mt-4">Experiência</h2>

                <div class="row">

                    <div class="col-md-8">
                        <div class="col-md-12 cor-card card mt-3 p-3 texto-exp">
                            <p className="p-title">Desenvolvedor Frontend</p>
                            <p>Desenvolvedor de sites, aplicando conhecimentos adquiridos em cursos Online, Bootcamps, DevSuperior e pesquisas.</p>
                            <br/>
                            <p className="p-title">Técnico em Manutenção e Suporte em Informática</p>
                            <p>Manutenção preditiva, corretiva e preventiva em computadores desktop - Serviço Nacional de Aprendizagem Industrial (SENAI).</p>
                            <br/>
                            <p className="p-title">Estagiário na RedeTV Porto Velho - RO Técnico em Manutenção e Suporte em Informática</p>
                            <p>Fornecia manutenção e suporte em diversas máquinas Windows e Linux granhando uma vasta experência com ambos os sistemas operacionais.</p>
                            <br/>
                            <p className="p-title">Efetivado na RedeTV Porto Velho - RO Técnico em Manutenção e Suporte em Informática</p>
                            <p>Com um conhecimento mais sólido e sempre buscando algo a mais, agora além de fornecer suporte, implementava também sistemas (SAMBA - Linux, FreeNAS - Linux) para a solução de problemas.</p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="col-md-12 cor-card-skills card mt-3 p-3">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item cor-card-skills text-center">HardSkills</li>
                                
                                <a href="www.google.com" className="list-group-item cor-card-skills cor-card-skills-active" target="">
                                    <li class="">DiplomaX.pdf</li>
                                </a>
                                
                                <a href="www.google.com" className="list-group-item cor-card-skills cor-card-skills-active" target="">
                                    <li class="">CertificadoX.pdf</li>
                                </a>

                                <a href="www.google.com" className="list-group-item cor-card-skills cor-card-skills-active" target="">
                                    <li class="">CertificadoX.pdf</li>
                                </a>

                                <a href="www.google.com" className="list-group-item cor-card-skills cor-card-skills-active" target="">
                                    <li class="">CertificadoX.pdf</li>
                                </a>

                                <a href="www.google.com" className="list-group-item cor-card-skills cor-card-skills-active" target="">
                                    <li class="">CertificadoX.pdf</li>
                                </a>

                                <a href="www.google.com" className="list-group-item cor-card-skills cor-card-skills-active" target="">
                                    <li class="">CertificadoX.pdf</li>
                                </a>
                            </ul>

                            <br/>
                            
                            <ul class="list-group list-group-flush mt-3">
                                <li class="list-group-item cor-card-skills text-center">SoftSkills</li>
                                <li class="list-group-item cor-card-skills">Pro-ativo</li>
                                <li class="list-group-item cor-card-skills">Adepto a novas tecnologias</li>
                                <li class="list-group-item cor-card-skills">Flexibilidade no trabalho</li>
                                <li class="list-group-item cor-card-skills">Paciente</li>
                                <li class="list-group-item cor-card-skills">Bom ouvinte</li>
                                <li class="list-group-item cor-card-skills">Gosta de pratica</li>
                                <li></li>
                            </ul>

                        </div>
                        
                        <div className="bnt-curriculo"><a href="https://www.google.com" target="_blank" rel="noreferrer">Baixar Curriculo (PDF)</a></div>

                    </div>

                </div>

                
            </div>
            <Footer />
        </>
    );
}

export default Curriculo;