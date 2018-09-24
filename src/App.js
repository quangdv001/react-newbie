import React from 'react';
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer);
const App = (props) => {
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
};

export default App;