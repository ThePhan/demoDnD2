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
        if (dropResult) {
          props.changePlace(item.index, dropResult.index);
        }
      }
};

var dropField = {
  canDrop: function (props, monitor) {
      var item = monitor.getItem(); // to get value from return beginDrag
      var dropResult = monitor.getDropResult();
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
        canDrop: PropTypes.bool.isRequired


    },
    render: function() {
        var connectDragSource = this.props.connectDragSource;
        var connectDropTarget = this.props.connectDropTarget;
        var isDragging = this.props.isDragging;
        var canDrop = this.props.canDrop;;
        var style = {
            width: "80px",
            height: "80px",
            background: isDragging ? 'Yellow' : 'Green',
            opacity: isDragging ? 0.5 : 1,
            fontSize: 16,
            cursor: 'move'
        };

        return connectDragSource(connectDropTarget(
          <div style = {style} >
            <p>
              {this.props.list}
            </p>
          </div>
        ));
    }
});
module.exports = flow(
    DragSource("li", drapResource, collectDrag),
    DropTarget("li", dropField, collectDrop)
)(DnD);
