import React, {useState} from 'react';
import './styles.css'
import   {FiArrowLeft}   from   'react-icons/fi' 
import Logo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom'; 
import api from '../../services/api';

export default function Caso(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ong_id = localStorage.getItem('ongId');
    const history = useHistory();
    async function cad(e){
        e.preventDefault();
        const dados = {
            title,
            description,
            value,  
        };
        await api.post('/incidents', dados, {
            headers: {
                authorization: ong_id,
            }
        })
        history.push('/list');
    }
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
                <form onSubmit={cad}>
                    <input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" className="descricao"  value={description} onChange={e => setDescription(e.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)} />
                    <div className="input-group">
                        <button type="button" className="cancelar" color="#E02041"> Cancelar </button>
                        <button type="submit" className="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};