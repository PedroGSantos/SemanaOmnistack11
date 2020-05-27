import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function conectar(e){
        e.preventDefault();
        
        try{
           
            const response =  await api.post('/sessions', {id});
            alert("Acesso concedido, " + response.data.name);
            localStorage.setItem('ongId', id);
            localStorage.setItem('nameOng', response.data.name);
            history.push('/list');
        }catch(err){
            alert("Acesso negado, tente novamente")
        }
    }

    return(
        <div className="constraint">
            <section className="form">
                <img src={logo} alt="logo"></img>
                <form onSubmit={conectar}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Seu ID" value={id} onChange={e=>setId(e.target.value)}></input>
                    <button type="submit" className="button">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroes} alt="Heroes"></img>
        </div>
    );
}