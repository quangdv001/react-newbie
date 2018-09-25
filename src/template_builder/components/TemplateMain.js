import React, { Component } from 'react';
import {connect} from 'react-redux';
import RenderContentWrap from './Render/RenderContentWrap';
import * as templateAction from '../actions/templateAction';

class TemplateMain extends Component {
    constructor(props) {
        super(props);
    }


    dropContent = (data) => {
        this.props.dropElement(data);
      }

    render() { 
        console.log(this.props);
        return (
           
            <div className="main-wrap">
                <RenderContentWrap
                    dropContent={this.dropContent}
                />
            </div>
        );
    }
}

const mapStateToProps = state => state

TemplateMain = connect(mapStateToProps, templateAction)(TemplateMain);
export default TemplateMain;

