
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TemplateLayout from './template_builder/components/TemplateLayout'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={TemplateLayout} />
                
            </Switch>
        </BrowserRouter>
    )
};

export { Routes }