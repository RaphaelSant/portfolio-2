import React from "react";
import "./estilo.css";

import InstagramIcon from "../../assets/imagens/Instagram_Icon.png";
import GitHubIcon from "../../assets/imagens/GitHub_Icon.png";
import LinkedinIcon from "../../assets/imagens/Linkedin_Icon.png";

function Footer() {
    return (
        <>
            <div className="footer d-flex justify-content-center align-items-center p-2">
                
                <div className="container">

                    <div className="row text-center">

                        <div className="col-sm mb-4 mt-4">
                            <p>2022 | Raphael Moura Santiago</p>
                        </div>

                        <div className="col-sm d-flex justify-content-center align-items-center">
                            <a href="https://github.com/RaphaelSant" target="blank"><img src={GitHubIcon} className="icon_footer" alt="Instagram Icone" /></a>

                            <a href="https://www.instagram.com/ramourigo/" target="blank"><img src={InstagramIcon} className="icon_footer" alt="GitHub Icone" /></a>
                            
                            <a href="https://www.linkedin.com/in/raphael-moura-santiago-085717201" target="blank"><img src={LinkedinIcon} className="icon_footer" alt="Linkedin Icone" /></a>
                            
                        </div>

                        <div className="col-sm d-flex justify-content-center align-items-center mb-4 mt-4">
                            <p>Vamos trabalhar juntos? <a href="#contatoModal" data-toggle="modal" className="contato">Entre em contato</a></p>
                        </div>

                    </div>

                </div>  

            </div>
            
            <div className="modal fade" id="contatoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Contato</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>Telefone</h5>
                            <a href="tel:69993885148">(69) 9 9388-5148</a>

                            <h5 className="mt-3">WhatsApp</h5>
                            <a href="https://api.whatsapp.com/send/?phone=5569993885148&text&app_absent=0">Inicie uma conversa</a>

                            <h5 className="mt-3">Email</h5>
                            <a href="mailto:raphael.sant.emp@gmail.com">raphael.sant.emp@gmail.com</a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;