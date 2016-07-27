import React from 'react';
var PropTypes = React.PropTypes;
var ReactDnd = require('react-dnd');
var DragSource = ReactDnd.DragSource;
var DropTarget = ReactDnd.DropTarget;
var flow = require('lodash/flow');

var drapResource = {
    beginDrag: function(props) {
      console.log('Draaaaaap Item Index: ' + props.index);
        return {
            index: props.index
        };
    },
    endDrag(props, monitor) {
        var item = monitor.getItem();
        var dropResult = monitor.getDropResult();
        console.log("check dropResult " + dropResult);
        // after finish drap, change place betwen toe Component
        if (dropResult) {
          props.changePlace(item.index, dropResult.index);
        }
      }
};

var dropField = {
  canDrop: function (props, monitor) {
      var item = monitor.getItem(); // to get value return from beginDrag
      // var dropResult = monitor.getDropResult();
      // console.log("check dropResult " + dropResult);
      // console.log("check item" +item.index + " ddddddd " + props.index);
      if(item.index == props.index){
        return false;
      }
      return true;
  },
    drop: function(props) {
      console.log('Drop Item Index: ' + props.index);
        return {
            index: props.index
        };
    }

};

function collectDrag(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
  };
}
var DnD = React.createClass({

    PropTypes: {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired


    },
    render: function() {
        var connectDragSource = this.props.connectDragSource;
        var connectDropTarget = this.props.connectDropTarget;
        var isDragging = this.props.isDragging;
        var canDrop = this.props.canDrop;
        var isOver = this.props.isOver;
        var isActive = canDrop && isOver;
        var className = '';
        if(!isDragging){
            if(isActive){
                className = 'active';
            }
        }
        // var style = {
        //
        // };

        return connectDragSource(connectDropTarget(
          <div style = {{
            background: isDragging ? '#F0F4C3' : 'White',
            opacity: isDragging ? 0.5 : 1,
            fontSize: 16,
            cursor: 'move'}}
            className={this.props.className} >
            <div className={className} style={{height:'385px'}}>
                  {this.props.list.id}
            </div>
            </div>
        ));
    }
});
module.exports = flow(
    DragSource("li", drapResource, collectDrag),
    DropTarget("li", dropField, collectDrop)
)(DnD);
