import React, { Component } from 'react';

class RenderBtnUpload extends Component {
    render() {
    
        return (
            <div>
                <h2>{this.props.data.data}</h2>
            </div>
        );
    }
}

export default RenderBtnUpload;