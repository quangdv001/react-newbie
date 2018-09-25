import React from 'react';
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const App = (props) => {
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
};

export default App;