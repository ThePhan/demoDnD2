'use strict';
var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);


var BasicLayout = React.createClass({
  mixins: [PureRenderMixin],


  getDefaultProps() {
    return {
      className: "layout",
      items: [
      {
        id:'item1',
        x: 3,
        y: 4,
        w: 100,
        h:150
      },
      {
        id:'item2',
        x: 3,
        y: 4,
        w: 100,
        h:150
      },
      {
        id:'item3',
        x: 3,
        y: 4,
        w: 100,
        h:150
      },
      {
        id:'item4',
        x: 3,
        y: 4,
        w: 100,
        h:150
      },
      {
        id:'item5',
        x: 3,
        y: 4,
        w: 100,
        h:150
      },
      {
        id:'item6',
        x: 3,
        y: 4,
        w: 100,
        h:150
      },
      {
        id:'item7',
        x: 3,
        y: 4,
        w: 100,
        h:150
      },
      {
        id:'item8',
        x: 3,
        y: 4,
        w: 100,
        h:150
      },
      {
        id:'item9',
        x: 3,
        y: 4,
        w: 100,
        h:150
      }
    ],
      rowHeight: 30,
      cols: 12
    };
  },

  // getInitialState() {
  //   var layout = this.generateLayout();
  //   return {
  //     layout: layout
  //   };
  // },

  generateDOM() {
    // return _.map(_.range(this.props.items), function(i) {
    //   return (<div key={i}><span className="text">{i}</span></div>);
    // });
    return(
      this.props.items.map(function(lk, i){
        return(<div key={i}> {lk.id} </div>)
      })
    )

  },

  // generateLayout() {
  //   var p = this.props;
  //   return _.map(new Array(p.items), function(item, i) {
  //     var y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
  //     return {x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y, i: i.toString()};
  //   });
  // },

  // onLayoutChange: function(layout) {
  //   this.props.onLayoutChange(layout);
  // },

  render() {
    return (
      <div className="center">
      <ReactGridLayout
          {...this.props}>
        {this.generateDOM()}
      </ReactGridLayout>
      </div>
    );
  }
});

module.exports = BasicLayout;
