import React from 'react';
import Logon from './pages/Logon';
import Cadastro from './pages/Cadastro';
import Listar from './pages/Listar';
import Caso from './pages/Caso';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Cadastro}/>
                <Route path="/list" component={Listar}/>
                <Route path="/casos/novo" component={Caso}/>
            </Switch>
        </BrowserRouter>

    );
};