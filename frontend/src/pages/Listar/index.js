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
    const id = localStorage.getItem('ongId')
    const history = useHistory();
    async function deletar(id){
        await api.delete("/incidents/"+id, {
            headers: {
                authorization:id,
            }
        });
        setIncidents(incidents.filter(incident=> incidents.id != id ));
    }
    function deslogar(){
        localStorage.clear();
        history.push('/');
    }

    useEffect(()=>{
        api.get('/incidents', {
            headers:{
                authorization: id,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [id])
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
                    <li>
                    <strong>CASO:</strong>
                    <p>{incidents.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incidents.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>

                    <button type="button" onClick={()=>deletar(incidents.id)}><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
               ))}
                
            </ul>
        </div>
    );
};