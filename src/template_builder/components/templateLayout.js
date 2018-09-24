import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as templateAction from '../actions/templateAction';
import { TemplateApi } from "../../api/templateApi";

import { Layout } from 'element-react';
import 'element-theme-default';

class templateLayout extends Component {

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
                <Layout.Row>
                    <Layout.Col span="24"><div className="grid-content bg-purple-dark">Header</div></Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span="4"><div className="grid-content bg-purple"></div>left sidebar</Layout.Col>
                    <Layout.Col span="16"><div className="grid-content bg-purple-light">content </div></Layout.Col>
                    <Layout.Col span="4"><div className="grid-content bg-purple"></div>right</Layout.Col>
                </Layout.Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};


export default connect(mapStateToProps)(templateLayout);
