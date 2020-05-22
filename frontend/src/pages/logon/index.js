import React from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';
export default function Logon(){
    return(
        <div className="constraint">
            <section className="form">
                <img src={logo} alt="logo"></img>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Seu ID"></input>
                    <button type="submit" className="button">Entrar</button>
                    <a href="/registre">
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroes} alt="Heroes"></img>
        </div>
    );
}