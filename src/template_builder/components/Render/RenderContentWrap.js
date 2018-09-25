import React, { Component } from 'react';
import { ItemTypes } from '../constants';
import { DropTarget } from 'react-dnd';
import {connect} from 'react-redux';
import renderRoot from './RenderRoot';
import * as templateAction from '../../actions/templateAction';

const contentTarget = {
    // canDrop (props) {
    //   const {canMovePiece, position: {x, y}} = props
    //   return canMovePiece(x, y)
    // },
  
    drop (props, monitor) {
        const {dropContent} = props;
        const item = monitor.getItem();
        let data = {
            id: Math.random(1,999),
            type: item.type,
            data: 'hahahaha'
        }
        dropContent(data);
    }
}

function collect (connect, monitor) {
    const info = {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
    //   canDrop: monitor.canDrop()
    }
  
    return info
  }

class RenderContentWrap extends Component {
    renderContent(){
        let content = this.props.data.templateReducer.content;
        return content.map(item => {
            let blType = item.type || 0;
            let data = item;
            return renderRoot(blType, data);
        });
    }

    render() {
        // console.log(this.props);
        const {connectDropTarget, isOver } = this.props
        return connectDropTarget(
            <div className="main-container">
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
};

RenderContentWrap = DropTarget(ItemTypes.BtnDrag, contentTarget, collect)(RenderContentWrap)
RenderContentWrap = connect(mapStateToProps)(RenderContentWrap);
export default RenderContentWrap;