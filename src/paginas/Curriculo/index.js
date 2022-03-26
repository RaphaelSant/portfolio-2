import React from "react";
import "./estilo.css";
import Profile from "../../assets/imagens/profile.png";
import Navbar from "../../componentes/NavBar"
import Footer from "../../componentes/Footer";
/*import smoothscroll from "../../componentes/ScrollToTop";*/
import Helmet from "react-helmet";
import udemy01 from "../../assets/certificadosDiplomas/Online/Udemy_AlgoritmosELogicaDeProgramação.pdf";
import alura01 from "../../assets/certificadosDiplomas/Online/Alura_CertificadoHTML5eCSS3parte1.pdf";
import alura02 from "../../assets/certificadosDiplomas/Online/Alura_CertificadoHTML5eCSS3parte2.pdf";
import alura03 from "../../assets/certificadosDiplomas/Online/Alura_CertificadoBootstrap4.pdf";
import alura04 from "../../assets/certificadosDiplomas/Online/Alura_CertificadoGitEGithub.pdf";
import sds2 from "../../assets/certificadosDiplomas/Eventos/DevSuperior_EventoSDS2.pdf"
import sds4 from "../../assets/certificadosDiplomas/Eventos/DevSuperior_EventoSDS4.pdf"
import sds6 from "../../assets/certificadosDiplomas/Eventos/DevSuperior_EventoSDS6.pdf"

function Curriculo() {

    return (
        <>
            <Helmet title="Raphael Santiago - Currículo" />
            {/*smoothscroll()*/}
            <Navbar />
            <div className="container mb-4">
                <div className="cv-profile">
                    <img src={Profile} alt="Imagem de perfil" className="cv-profile-img" />
                    <h1 className="cv-profile-titulo">Raphael Moura Santiago</h1>
                </div>

                <div className="cv-content">
                    <h2 className="cv-h2">Perfil</h2>
                    <hr className="cv-separator" />
                    <p className="cv-texto">Experiente em manutenção e suporte de informática, pretende migrar de carreira e ser um programador full stack. Atualmente cursa Sistemas de Informação na faculdade Sapiens e estuda a linguagem Java Script e o framework React para desenvolvimento web. Futuramente pretende utilizar a linguagem Java para o back-end das aplicações tendo em vista que é uma linguagem poderosa e completa!</p>
                </div>

                <div className="cv-content">
                    <h2 className="cv-h2">Experiência</h2>
                    <hr className="cv-separator" />
                    <h3 className="cv-subtitle">Desenvolvedor Frontend</h3>
                    <p className="cv-texto">Desenvolvedor de sites, aplicando conhecimentos adquiridos em cursos Online, Bootcamps, Eventos e pesquisas.</p>
                    <hr className="cv-separator" />
                    <h3 className="cv-subtitle">Técnico em Manutenção e Suporte em Informática</h3>
                    <p className="cv-texto">Manutenção preditiva, corretiva e preventiva em computadores desktop - Serviço Nacional de Aprendizagem Industrial (SENAI).</p>
                    <hr className="cv-separator" />
                    <h3 className="cv-subtitle">Estagiário na RedeTV Porto Velho / RO (Técnico em Manutenção e Suporte em Informática)</h3>
                    <p className="cv-texto">Fornecia manutenção e suporte em diversas máquinas Windows e Linux, granhando uma vasta experência com ambos os sistemas operacionais.</p>
                    <hr className="cv-separator" />
                    <h3 className="cv-subtitle">Efetivado na RedeTV Porto Velho / RO (Técnico em Manutenção e Suporte em Informática)</h3>
                    <p className="cv-texto">Com um conhecimento mais sólido, sempre buscando algo a mais, agora além de fornecer suporte, implementava também sistemas (SAMBA - Linux, FreeNAS - Linux) para a solução de problemas.</p>
                </div>

                <div className="cv-content">
                    <h2 className="cv-h2">Hard Skills</h2>
                    <hr className="cv-separator" />

                    <section className="cv-cursos text-center">
                        <h3 className="cv-subtitle mb-2">Cursos online</h3>
                        <table className="cv-table">
                            <tr>
                                <th className="cv-tbcoluna cv-texto cv-tbtext">Nome</th>
                                <th className="cv-tbcoluna cv-texto cv-tbtext">Instituição</th>
                                <th className="cv-tbcoluna cv-texto cv-tbtext">Certificado</th>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">Algoritimos e lógica de programação</td>
                                <td className="cv-tbcoluna cv-texto">Udemy</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href={udemy01} target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">HTML5</td>
                                <td className="cv-tbcoluna cv-texto">DevMedia</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href="https://www.devmedia.com.br/certificado/tecnologia/html/raphael-moura-santiago" target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">CSS3</td>
                                <td className="cv-tbcoluna cv-texto">DevMedia</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href="https://www.devmedia.com.br/certificado/tecnologia/css/raphael-moura-santiago" target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">Algoritimo</td>
                                <td className="cv-tbcoluna cv-texto">DevMedia</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href="https://www.devmedia.com.br/certificado/tecnologia/algoritmo/raphael-moura-santiago" target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">JavaScript</td>
                                <td className="cv-tbcoluna cv-texto">DevMedia</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href="https://www.devmedia.com.br/certificado/tecnologia/javascript/raphael-moura-santiago" target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">React</td>
                                <td className="cv-tbcoluna cv-texto">DevMedia</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href="https://www.devmedia.com.br/certificado/tecnologia/react/raphael-moura-santiago" target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">SQL</td>
                                <td className="cv-tbcoluna cv-texto">DevMedia</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href="https://www.devmedia.com.br/certificado/tecnologia/sql/raphael-moura-santiago" target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">HTML5 e CSS3 parte 1</td>
                                <td className="cv-tbcoluna cv-texto">Alura</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href={alura01} target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">HTML5 e CSS3 parte 2</td>
                                <td className="cv-tbcoluna cv-texto">Alura</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href={alura02} target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">Bootstrap 4</td>
                                <td className="cv-tbcoluna cv-texto">Alura</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href={alura03} target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">Git e GitHub</td>
                                <td className="cv-tbcoluna cv-texto">Alura</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href={alura04} target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>

                        </table>
                    </section>

                    <hr className="cv-separator" />

                    <section className="cv-cursos">
                        <h3 className="cv-subtitle mb-2">Eventos</h3>

                        <table className="cv-table">
                            <tr>
                                <th className="cv-tbcoluna cv-texto cv-tbtext">Nome</th>
                                <th className="cv-tbcoluna cv-texto cv-tbtext">Instituição</th>
                                <th className="cv-tbcoluna cv-texto cv-tbtext">Certificado</th>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">Semana DevSuperior ed.: 2.0</td>
                                <td className="cv-tbcoluna cv-texto">DevSuperior</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href={sds2} target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">Semana Spring React ed.: 4.0</td>
                                <td className="cv-tbcoluna cv-texto">DevSuperior</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href={sds4} target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-tbcoluna cv-texto">Semana Spring React ed.: 6.0</td>
                                <td className="cv-tbcoluna cv-texto">DevSuperior</td>
                                <td className="cv-tbcoluna">
                                    <a className="cv-link" href={sds6} target="_blank" rel="noreferrer">Exibir</a>
                                </td>
                            </tr>
                        </table>
                    </section>

                </div>

                <div className="cv-content">
                    <h2 className="cv-h2">Soft Skills</h2>
                    <hr className="cv-separator" />
                    <ul className="cv-list">
                        <li className="cv-texto">Pro-ativo</li>
                        <li className="cv-texto">Adepto a novas tecnologias</li>
                        <li className="cv-texto">Paciente</li>
                        <li className="cv-texto">Gosta de praticar</li>
                    </ul>
                </div>

                <a className="bnt-cv" href="https://www.canva.com/design/DAE76tNS5cM/AUjd61vo2CvOQWsfuaUj7Q/view?utm_content=DAE76tNS5cM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noreferrer">Baixar Curriculo (PDF)</a>
            </div>
            <Footer />
        </>
    );
}

export default Curriculo;