import React, { Component } from 'react';
import { ItemTypes } from '../constants';
import { DragSource } from 'react-dnd';
import {connect} from 'react-redux';
import * as templateAction from '../../actions/templateAction';

var isDrop = 0;

const BtnUploadSource = {
    beginDrag (props, dnd, element) {
      return {type: 1};
    },

    endDrag(props, monitor) {
		const item = monitor.getItem();
		const dropResult = monitor.getDropResult();
		if (dropResult) {
		}
	},
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    // connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class BtnUpload extends Component {

    render() {
        const { connectDragSource, isDragging } = this.props

        return connectDragSource(
        <div className="bl-icon-drag" action={this.action} style={{
            backgroundColor: isDragging ? 'transparent' : '#fff',
            opacity: isDragging ? 0.25 : 1,
        }}>
            <i className="el-icon-upload icon-drag"></i>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
};
BtnUpload = DragSource(ItemTypes.BtnDrag, BtnUploadSource, collect)(BtnUpload)
BtnUpload = connect(mapStateToProps)(BtnUpload);
export default BtnUpload;