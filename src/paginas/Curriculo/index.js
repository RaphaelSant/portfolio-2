import React from "react";
import "./estilo.css";
import Profile from "../../assets/imagens/profile.png";
import Navbar from "../../componentes/NavBar"
import Footer from "../../componentes/Footer";
import smoothscroll from "../../componentes/ScrollToTop";
import Helmet from 'react-helmet';

function Curriculo() {

    return (
        <>
            <Helmet title="Raphael Santiago - Currículo" />
            {smoothscroll()}
            <Navbar />
            <div className="container mb-4">

                <div className="curriculo-titulo">
                    <img src={Profile} alt="Imagem de perfil" className="profile-curriculo" />
                    <h1 className="port-titulo text-center">Raphael Moura Santiago</h1>
                </div>

                <div className="curriculo-content">
                    <h2 className="curriculo-subtitulo">Perfil</h2>
                    <p className="curriculo-texto">Experiente em manutenção e suporte de informática, pretende migrar de carreira e ser um programador full stack. Atualmente cursa Sistemas de Informação na faculdade Sapiens e estuda a linguagem Java Script e o framework React para desenvolvimento web. Futuramente pretende utilizar a linguagem Java para o back-end das aplicações tendo em vista que é uma linguagem poderosa e completa!</p>
                </div>

                <div className="curriculo-content">
                    <h2 className="exp-subtitulo">Experiência</h2>
                    <p className="exp-titulo">Desenvolvedor Frontend</p>
                    <p className="exp-texto">Desenvolvedor de sites, aplicando conhecimentos adquiridos em cursos Online, Bootcamps, DevSuperior e pesquisas.</p>
                    <hr />
                    <p className="exp-titulo">Técnico em Manutenção e Suporte em Informática</p>
                    <p className="exp-texto">Manutenção preditiva, corretiva e preventiva em computadores desktop - Serviço Nacional de Aprendizagem Industrial (SENAI).</p>
                    <hr />
                    <p className="exp-titulo">Estagiário na RedeTV Porto Velho - RO Técnico em Manutenção e Suporte em Informática</p>
                    <p className="exp-texto">Fornecia manutenção e suporte em diversas máquinas Windows e Linux granhando uma vasta experência com ambos os sistemas operacionais.</p>
                    <hr />
                    <p className="exp-titulo">Efetivado na RedeTV Porto Velho - RO Técnico em Manutenção e Suporte em Informática</p>
                    <p className="exp-texto">Com um conhecimento mais sólido e sempre buscando algo a mais, agora além de fornecer suporte, implementava também sistemas (SAMBA - Linux, FreeNAS - Linux) para a solução de problemas.</p>
                </div>


                <div class="row">

                    

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

                            <br />

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