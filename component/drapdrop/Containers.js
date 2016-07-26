import React from 'react';
import ReactDOM from 'react-dom';
import DnD from './dnd';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];
class Containers extends React.Component{
  constructor(props){
    super(props);
    this.state={
      listItem: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9']
    }
  }
  changePlace(dragIndex, dropIndex){
    var list= this.state.listItem;
    var middle = list[dragIndex];
    list[dragIndex] = list[dropIndex];
    list[dropIndex] = middle;
    this.setState(this.state);
  }
  render() {
    return(
    <div>
      {this.state.listItem.map((list1, i) => {
        return (<DnD key={i} list={list1}   index={i} changePlace={this.changePlace.bind(this)}/>)
      }, this)}
    </div>
  )
  }
}
// export default Containers;
module.exports = DragDropContext(HTML5Backend)(Containers);
