import React from 'react';
import Logon from './pages/Logon';
import Cadastro from './pages/Cadastro';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Cadastro}/>
            </Switch>
        </BrowserRouter>

    );
};