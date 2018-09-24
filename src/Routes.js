
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import templateLayout from './template_builder/components/templateLayout'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={templateLayout} />
                
            </Switch>
        </BrowserRouter>
    )
};

export { Routes }