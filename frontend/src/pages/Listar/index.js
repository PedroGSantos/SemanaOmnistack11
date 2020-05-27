import React from 'react';
import './styles.css';
import {FiPower} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

export default function Listar(){
    return(
        <div className="container-listar">
            <header>
            <img src={logoImg} alt= "be the hero"/>
            <p>Bem vindo, APDA</p>
            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button type="button"> 
                <FiPower size={18} color="#E02041"></FiPower>
            </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
            </ul>
        </div>
    );
};