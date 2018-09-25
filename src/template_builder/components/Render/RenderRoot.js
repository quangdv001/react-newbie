
import React, { Component } from 'react';
import RenderBtnUpload from './RenderBtnUpload';

const renderRoot = (blType, data) => {
    switch(blType){
        case 1:
            return <RenderBtnUpload key={data.id} data={data} />;
        default:
            return;    
        
    }
};

export default renderRoot;