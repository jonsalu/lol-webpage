import React from "react";
import './somanyways.css'


const SoManyWays = () => {

    


    return(
        <div className="somanyways">
            <div className="ways-text">
                <h1>Várias maneiras de</h1>
                <h2>JOGAR</h2>
                <button>JOGUE AGORA</button>
            </div>

            <div className="way-cards">
                <div className="card-way">
                    <h2>Summoner's Rift</h2>
                    <img src="/src/assets/modes/summoners-rift.webp" alt="" />
                    <p>Limpe sua rota, mergulhe em épicos confrontos de equipe 5v5 e destrua o Nexus inimigos antes que detruam o seu.</p>
                </div>
                <div className="card-way">
                    <h2>ARAM</h2>
                    <img src="/src/assets/modes/aram.webp" alt="" />
                    <p>Em uma ponte congelante, batalhe com sua equipe de campeões aleatórios avançando em direção ao nexus inimigo nesse divertido e caótico modo de jogo 5v5.</p>
                </div>
                <div className="card-way">
                    <h2>TFT</h2>
                    <img src="/src/assets/modes/tft.webp" alt="" />
                    <p>Monte uma equipe de campeões para batalhar em seu nome. Derrote os sete oponentes e sobreviva por mais tempo</p>
                </div>
            </div>
        </div>
    )
}

export default SoManyWays