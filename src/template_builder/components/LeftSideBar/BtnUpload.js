import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const BtnUploadSource = {
    beginDrag (props, dnd, element) {
      console.log('props of knight, since these aren\'t in the docs')
      console.log(props, dnd, element)
      return {}
    }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    // connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
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

export default DragSource(ItemTypes.BtnUpload, BtnUploadSource, collect)(BtnUpload)