import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as templateAction from '../actions/templateAction';
import { TemplateApi } from "../../api/templateApi";



class Layout extends Component {

    componentDidMount(){
        const title = 'ABC';
        const message =  'XYZ';
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }

        var id = this.props.match.params.id || 0;
        console.log(id);

        TemplateApi.getData().then(res => {
            this.props.dispatch(templateAction.getDataSuccess(data));
        });

    }

    render() {
        return (
            <div>
                <h1>Hello2222</h1>
                { console.log(this.props)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};


export default connect(mapStateToProps)(Layout);
