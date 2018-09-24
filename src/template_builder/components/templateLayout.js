import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as templateAction from '../actions/templateAction';
import { TemplateApi } from "../../api/templateApi";

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { Layout } from 'element-react';
import 'element-theme-default';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import MainTemplate from './TemplateMain';
class TemplateLayout extends Component {

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

        // TemplateApi.getData().then(res => {
        //     this.props.dispatch(templateAction.getDataSuccess(data));
        // });

    }

    render() {
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="24"><div className="grid-content bg-purple-dark header">Header</div></Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span="4"><div className="grid-content bg-purple side-bar"><LeftSideBar /></div></Layout.Col>
                    <Layout.Col span="16"><div className="grid-content bg-purple-light content-wrap"><MainTemplate /> </div></Layout.Col>
                    <Layout.Col span="4"><div className="grid-content bg-purple side-bar">right</div></Layout.Col>
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

TemplateLayout = DragDropContext(HTML5Backend)(TemplateLayout);
TemplateLayout = connect(mapStateToProps)(TemplateLayout);

export default TemplateLayout;
