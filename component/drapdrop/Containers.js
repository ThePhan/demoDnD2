import React from 'react';
import ReactDOM from 'react-dom';
import DnD from './dnd';
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var colors = ["Red", "Green", "Blue", "Yellow", "Black", "White", "Orange"];
class Containers extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                listItem: [
                {
                  id:'item1',
                  className: 'col-md-12'
                },
                {
                  id:'item2',
                  className: 'col-md-6'
                },
                {
                  id:'item3',
                  className: 'col-md-6'
                },
                {
                  id:'item4',
                  className: 'col-md-7'
                },
                {
                  id:'item5',
                  className: 'col-md-5'
                },
                {
                  id:'item6',
                  className: 'col-md-12'
                },
                {
                  id:'item7',
                  className: 'col-md-6'
                },
                {
                  id:'item8',
                  className: 'col-md-6'
                },
                {
                  id:'item9',
                  className: 'col-md-12'
                }
              ]
            }
        }
        changePlace(dragIndex, dropIndex) {
            var list = this.state.listItem;
            var middle = list[dragIndex];
            list[dragIndex] = list[dropIndex];
            list[dropIndex] = middle;
            this.setState(this.state);
        }
        render() {
                return (
                  <div className="container layout">
                    {this.state.listItem.map((list1, i) => {return (< DnD key = {i} list = {list1} index = {i} className={list1.className} changePlace = {this.changePlace.bind(this)} />)}, this)}
                  </div>
                );
                }
            }
            // export default Containers;
        module.exports = DragDropContext(HTML5Backend)(Containers);
