import React, { Component } from 'react';
import { Layout } from 'element-react';
import 'element-theme-default';
import BtnUpload from './BtnUpload';


class LeftSideBar extends Component {
    render() {
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="12"><BtnUpload /></Layout.Col>
                    <Layout.Col span="12"><div className="bl-icon-drag"><i className="el-icon-circle-check icon-drag"></i></div></Layout.Col>
                    <Layout.Col span="12"><div className="bl-icon-drag"><i className="el-icon-star-on icon-drag"></i></div></Layout.Col>
                    <Layout.Col span="12"><div className="bl-icon-drag"><i className="el-icon-setting icon-drag"></i></div></Layout.Col>
                    <Layout.Col span="12"><div className="bl-icon-drag"><i className="el-icon-message icon-drag"></i></div></Layout.Col>
                </Layout.Row>
                
            </div>
        );
    }
}

export default LeftSideBar;