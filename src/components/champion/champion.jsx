import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './champion.css'

const Champion = () =>{
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    }

    return(
        <div className="champion">
            <div className="text-champion">
                <h1>Escolha seu</h1>
                <h2>CAMPEÃO</h2>
                <p>Quer você goste de se jogar na batalha, ajudar seus aliados ou os dois, existe um lugar para você no rift</p>

                <div className="champ-btns">
                    <button className="btn1">DESCUBRA MAIS CAMPEÕES</button>
                    <button className="btn2">JOGAR AGORA</button>
                </div>

                
                
            </div>

            <div className="pic-champion">
                <div className="slidercontainer">
                    <Slider {...settings}>
                        <div className="champslide">
                            <h1>AKALI</h1>
                            <h2>A assassina renegada</h2>
                            <img className="champic" src="/champion-pics/akali-champion.avif" alt="" />
                            <img src="/champion-pics/assassin-pic.webp" alt="" />
                            <p>Assassino</p>
                        </div>
                        <div className="champslide">
                            <h1>YASUO</h1>
                            <h2>O imperdoável</h2>
                            <img className="champic" src="/champion-pics/yasuo-champion.avif" alt="" />
                            <img src="/champion-pics/lutadores-pic.avif" alt="" />
                            <p>Lutador</p>
                        </div>
                        <div className="champslide">
                            <h1>LUX</h1>
                            <h2>A dama da luz</h2>
                            <img className="champic" src="/champion-pics/lux-champion.avif" alt="" />
                            <img src="/champion-pics/magos-pic.avif" alt="" />
                            <p>Mago</p>
                        </div>
                        <div className="champslide">
                            <h1>JINX</h1>
                            <h2>O gatilho desenfreado</h2>
                            <img className="champic" src="/champion-pics/jinx-champion.avif" alt="" />
                            <img src="/champion-pics/adc-pic.avif" alt="" />
                            <p>Atirador</p>
                        </div>
                        <div className="champslide">
                            <h1>TRESH</h1>
                            <h2>O guardião das correntes</h2>
                            <img className="champic" src="/champion-pics/tresh-champion.avif" alt="" />
                            <img src="/champion-pics/sup-pic.avif" alt="" />
                            <p>Suporte</p>
                        </div>
                        <div className="champslide">
                            <h1>LEONA</h1>
                            <h2>A alvorada radiante</h2>
                            <img className="champic" src="/champion-pics/leona-champion.avif" alt="" />
                            <img src="/champion-pics/tanques-pic.avif" alt="" />
                            <p>Tanque</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Champion