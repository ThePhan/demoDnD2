import React from 'react';
import ReactDOM from 'react-dom';
import DnD from './dnd';

var ResizableBox = require('react-resizable').ResizableBox;
var Resizable = require('react-resizable').Resizable;
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

class Containers extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                listItem: [
                [{
                  id:'item1',
                  className: 'col-md-12'
                }],
                [{
                  id:'item2',
                  className: 'col-md-6'
                }],
                [{
                  id:'item3',
                  className: 'col-md-6'
                }],
                [{
                  id:'item4',
                  className: 'col-md-7'
                }],
                [{
                  id:'item5',
                  className: 'col-md-5'
                }],
                [{
                  id:'item6',
                  className: 'col-md-12'
                }],
                [{
                  id:'item7',
                  className: 'col-md-6'
                }],
                [{
                  id:'item8',
                  className: 'col-md-6'
                }],
                [{
                  id:'item9',
                  className: 'col-md-12'
                }]
              ]
            }
        }
        changePlace(dragIndex, dropIndex) {
            var list = this.state.listItem;
            var listDrag = JSON.parse(JSON.stringify(list[dragIndex.indexRow][dragIndex.indexList]));
            var listDrop = JSON.parse(JSON.stringify(list[dropIndex.indexRow][dropIndex.indexList]));

            if (listDrag.className === 'col-md-12' || listDrop.className === 'col-md-12') {
              var listDrags=JSON.parse(JSON.stringify(list[dragIndex.indexRow]));
              var listDrogs=JSON.parse(JSON.stringify(list[dropIndex.indexRow]));
              list[dragIndex.indexRow]=listDrogs;
              list[dropIndex.indexRow]=listDrags;
            }else {
              var listDrag=JSON.parse(JSON.stringify(list[dragIndex.indexRow][dragIndex.indexList]));
              var listDrog=JSON.parse(JSON.stringify(list[dropIndex.indexRow][dropIndex.indexList]));
              list[dragIndex.indexRow][dragIndex.indexList].id=listDrog.id;
              list[dropIndex.indexRow][dropIndex.indexList].id=listDrag.id;
            }
            // this.state.listItem = list;
            // var middle = list[dragIndex];
            // list[dragIndex] = list[dropIndex];
            // list[dropIndex] = middle;
            this.setState(this.state);
        }
        render() {
                return (
                  <div className="container layout">
                    {this.state.listItem.map((rowa, indexRow) => {
                      return (
                        <div key={indexRow}>
                        {
                          rowa.map((div, indexList) => {
                            return (
                                <DnD key = {indexRow+"."+indexList} list = {div} indexRow = {indexRow} indexList={indexList} className={div.className} changePlace = {this.changePlace.bind(this)} />
                            );
                          })
                        }
                        </div>
                      );
                    })
                  }
                  </div>
                );
                }
            }
            // export default Containers;
        module.exports = DragDropContext(HTML5Backend)(Containers);
