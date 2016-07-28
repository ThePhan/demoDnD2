import React from 'react';
var PropTypes = React.PropTypes;
var ReactDnd = require('react-dnd');
var DragSource = ReactDnd.DragSource;
var DropTarget = ReactDnd.DropTarget;
var ResizableBox = require('react-resizable').ResizableBox;
var Resizable = require('react-resizable').Resizable;
var flow = require('lodash/flow');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

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
            background: isDragging ? '#F0F4C3' : 'green',
            opacity: isDragging ? 0.5 : 1,
            fontSize: 16,
            border: 1,
            cursor: 'move'}}
            className={this.props.className} >
              <ResizableBox  width={className} height={400} minConstraints={[150, 150]} >

                {(() => {

                    if(this.props.list.id==='item1'){
                        return(
                            <div className={className}>
                                <img src="../../style/img/7.png"  width='100%' className="img-responsive"/>
                            </div>
                        )
                    }
                    if(this.props.list.id==='item2'){
                        return(
                            <div className={className} style={{height:'385px'}}>
                                <img src="../../style/img/1.png" width='100%'  className="img-responsive"/>
                            </div>
                        )
                    }
                    if(this.props.list.id==='item3'){
                        return(
                            <div className={className} style={{height:'385px'}}>
                                <img src="../../style/img/2.png" width='100%'  className="img-responsive"/>
                            </div>
                        )
                    }
                    if(this.props.list.id==='item4'){
                        return(
                            <div className={className} style={{height:'385px'}}>
                                <img src="../../style/img/3.png" width='100%'  className="img-responsive"/>
                            </div>
                        )
                    }
                    if(this.props.list.id==='item6'){
                        return(
                            <div className={className} style={{height:'385px'}}>
                                <img src="../../style/img/4.png" width='100%'  className="img-responsive"/>
                            </div>
                        )
                    }
                    if(this.props.list.id==='item8'){
                        return(
                            <div className={className}>
                                <img src="../../style/img/8.png"  width='100%' className="img-responsive"/>
                            </div>
                        )
                    }
                })()}
              </ResizableBox>

            </div>
        ));
    }
});
module.exports = flow(
    DragSource("li", drapResource, collectDrag),
    DropTarget("li", dropField, collectDrop)
)(DnD);
