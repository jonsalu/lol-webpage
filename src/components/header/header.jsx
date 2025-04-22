import React, { useState } from "react";
import './header.css'
import { FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement('#root')

const Header = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => setModalIsOpen(true)
    const closeModal =() => setModalIsOpen(false)

    const handleModal = () => {
        if (modalIsOpen === true) {
            closeModal()
        }else {
            openModal()
        }    
    }

    return (
        <header>
            <div className="header">
                <div className="parte1">
                    <button id="riotlogo"><img src="/header-pics/logoo.png" alt="riot logo" /></button>
                    <a href="#"><img src="/header-pics/pngwing.com.png" alt="inicio" /></a>
                    <ul className="navibar">
                        <li><a href="#">O JOGO</a></li>
                        <li><a href="#">CAMPEÕES</a></li>
                        <li><a href="#">NOTÍCIAS</a></li>
                        <li><a href="#">NOTAS DAS ATUALIZAÇÕES</a></li>
                        <li><a href="#">ESPORTS</a></li>
                        <li><a href="#">MAIS</a></li>
                    </ul>
                </div>
                <div className="parte2">
                    <button id="searchbtn"><FaSearch size={20} /><input type="search" style={{ color: 'white' }} /></button>
                    <a href="#"><TbWorld size={20} color="white" /></a>
                    <button id="jogueagora">JOGUE AGORA</button>
                </div>

                <div className="responsive-part">

                    <button onClick={handleModal}>
                    <FaBars />
                    </button>

                    <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}  
                    className="headermodal">

                        <button onClick={closeModal}>X</button>
                        
                        <ul className="navibar">
                            <li><a href="#">O JOGO</a></li>
                            <li><a href="#">CAMPEÕES</a></li>
                            <li><a href="#">NOTÍCIAS</a></li>
                            <li><a href="#">NOTAS DAS ATUALIZAÇÕES</a></li>
                            <li><a href="#">ESPORTS</a></li>
                            <li><a href="#">MAIS</a></li>
                        </ul>
                    </Modal>

                </div>
            </div>
        </header>
    )
}

export default Header;
