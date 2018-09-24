import React from 'react';
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import templateReducer from './reducers/templateReducer';
const store = createStore(templateReducer);
const App = (props) => {
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
};

export default App;