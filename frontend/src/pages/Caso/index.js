import React from 'react';
import './styles.css'
import   {FiArrowLeft}   from   'react-icons/fi' 
import Logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom'; 

export default function Caso(){
    return(
        <div className="container-cadastro">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be the hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                    <Link className="back-link" to="/list">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" className="descricao" />
                    <input placeholder="Valor em reais" />
                    <div className="input-group">
                        <button type="button" className="cancelar" color="#E02041"> Cancelar </button>
                        <button type="submit" className="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};