import React from "react";
import './rockwithstyle.css'

const RockWithStyle = () =>{
    return(
        <div className="rockwithstyle">
            <div className="akali-rock">
                <img src="/public/rock-pics/akali-rock.avif" alt="" />
            </div>

            <div className="text-rock">
                <h2>Arrase com</h2>
                <h1>ESTILO</h1>
                <p>Personalize-o alterando a aparencia dos seus campeões favoritos com skins</p>
                <button>JOGAR AGORA</button>
            </div>
        </div>
    )
}

export default RockWithStyle