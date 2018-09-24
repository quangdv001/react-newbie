import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './template_builder/components/Layout'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Layout} />
                <Route path="/template/editPublicTemplate" exact component={Layout}/>
                <Route path="/template/editPublicTemplate/:id" exact render={props => <Layout{...props} /> }/>
                <Route path="/template/editPrivateTemplate" exact component={Layout}/>
                <Route path="/template/editPrivateTemplate/:id" exact render={props => <Layout{...props} /> }/>
            </Switch>
        </BrowserRouter>
    )
};

export { Routes }