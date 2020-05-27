import React, {useEffect, useState} from 'react';
import './styles.css';
import {FiPower} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import {Link,useHistory} from 'react-router-dom';
import api from '../../services/api';

export default function Listar(){
    const [incidents, setIncidents] = useState([]);
    const ong = localStorage.getItem('nameOng');
    const ongid = localStorage.getItem('ongId');
    const history = useHistory();

    async function deletar(id){
        await api.delete(`/incidents/${id}`, {
            headers: {
                authorization:ongid,
            }
        });
        setIncidents(incidents.filter(incident=> incident.id !== id ));
    };

    function deslogar(){
        localStorage.clear();
        history.push('/');
    };

    useEffect(()=>{
        api.get('/profille', {
            headers:{
                authorization:ongid,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongid]);

    return(
        <div className="container-listar">
            <header>
            <img src={logoImg} alt= "be the hero"/>
            <p>Bem vindo, {ong}</p>
            <Link className="button" to="/casos/novo">Cadastrar novo caso</Link>
            <button type="button" onClick={deslogar}> 
                <FiPower size={18} color="#E02041"></FiPower>
            </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
               {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button type="button" onClick={()=>deletar(incident.id)}><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
               ))}
                
            </ul>
        </div>
    );
};