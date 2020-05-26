import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.svg';
import   {FiArrowLeft}   from   'react-icons/fi' 
import {Link} from 'react-router-dom'; 

export default function Cadastro(){
    return(
        <div className="container-cadastro">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be the hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ong</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o logon
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG" />
                    <input placeholder="E-mail" type="email" />
                    <input placeholder="Whatsapp" />
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{width:80}} className="uf"/>
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
};