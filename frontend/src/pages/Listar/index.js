import React from 'react';
import './styles.css';
import {FiPower} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import {Link,useHistory} from 'react-router-dom';

export default function Listar(){
    const ong = localStorage.getItem('nameOng');
    const history = useHistory();
    function deslogar(){
        history.push('/');
    }
    return(
        <div className="container-listar">
            <header>
            <img src={logoImg} alt= "be the hero"/>
            <p>Bem vindo, {ong}</p>
            <Link className="button" to="/casos/novo">Cadastrar novo caso</Link>
            <button type="button"> 
                <FiPower size={18} color="#E02041" onClick={deslogar}></FiPower>
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