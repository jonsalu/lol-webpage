import React from "react";
import './footer.css'
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaRedditSquare } from "react-icons/fa";



const Footer = () => {
    return(
        <div className="footer">
            <div className="social-icons">
                <ul>
                    <li><FaYoutube size={20}/></li>
                    <li><FaSquareXTwitter size={20}/></li>
                    <li><FaFacebookSquare size={20}/></li>
                    <li><FaSquareInstagram size={20}/></li>
                    <li><FaRedditSquare size={20}/></li>
                </ul>
            </div>

            <div className="footer-links">
                <ul>
                    <li><a href="#">EULA</a></li>
                    <li><a href="#">AVISO DE PRIVACIDADE</a></li>
                    <li><a href="#">TERMOS DE USO</a></li>
                    <li><a href="#">PREFERENCIA DE COOKIES</a></li>
                </ul>
            </div>

            <div className="indicativeclass">
                <div className="indicativecontainer">
                    <div className="indicative-age">
                        <h1>12</h1>
                    </div>

                    <div className="itcontains">
                        <ul>
                            <li>Violência</li>
                            <li>Conteúdo sexual</li>
                            <li>Linguagem imprópria</li>
                            <li>Compras online</li>
                            <li>Interação de usuários</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer