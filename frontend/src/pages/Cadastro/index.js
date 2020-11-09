import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCidade] = useState('');
    const [uf, setUF] = useState('');
    const history = useHistory();
    async function envio(e) {
        e.preventDefault();
        const dados = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        const response = await api.post('/ongs', dados);
        alert("Seu id é:" + response.data.id);
        history.push('/');

    }
    return (
        <div className="container-cadastro">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be the hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ong</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={envio}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCidade(e.target.value)} />
                        <input placeholder="UF" style={{ width: 80 }} className="uf" value={uf} onChange={e => setUF(e.target.value)} />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
};