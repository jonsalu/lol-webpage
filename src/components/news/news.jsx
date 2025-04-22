import React from "react";
import './news.css'

const News = () =>{
    return(
        <div className="news">
            <div className="title-news">
                <h1>NOTÍCIAS EM DESTAQUE</h1>
            </div>

            <div className="news-cards">
                <div className="card">
                    <img src="/news-pics/card1-pic.avif" alt="" />
                    <p>dev 07/02/2025</p>
                    <h2>Atualização dev: Check-in da 1° temporada</h2>
                    <p>Detalhes sobre a remoção dos Baús Hextec, novidades no Passe de Batalha e no Arena, e muito mais</p>
                </div>

                <div className="card">
                    <img src="/news-pics/card2-pic.avif" alt="" />
                    <p>dev 07/02/2025</p>
                    <h2>/dev: mudanças na 1°temporada</h2>
                    <p>Reflexões sobre os impactos das mudanças da 1° temporada</p>
                </div>
                
                <div className="card">
                    <img src="/news-pics/card3-pic.avif" alt="" />
                    <p>dev 07/02/2025</p>
                    <h2>/dev Arena - O desafio grandioso</h2>
                    <p>O que esperar da estreia do Ato 2 do Arena</p>
                </div>
            </div>
        </div>
    )
}

export default News