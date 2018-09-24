import React, { Component } from 'react';
import Knight from './Knight';
import Square from './Square';
import Board from './Board';

class App extends Component {
    render() {
        return (
            <div>
                <Board knightPosition={[7, 4]}/>
            </div>
        );
    }
}

export default App;