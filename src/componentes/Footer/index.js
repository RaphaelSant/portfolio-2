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

            <div class="modal fade" id="contatoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Contato</h5>
                        </div>
                        <div class="modal-body">
                            <h5 className="mb-1">Telefone</h5>
                            <a href="tel:69993885148">(69) 9 9388-5148</a>

                            <h5 className="mt-3 mb-1">WhatsApp</h5>
                            <a href="https://api.whatsapp.com/send/?phone=5569993885148&text&app_absent=0">Inicie uma conversa</a>

                            <h5 className="mt-3 mb-1">Email</h5>
                            <a href="mailto:raphael.sant.emp@gmail.com">raphael.sant.emp@gmail.com</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-close" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;