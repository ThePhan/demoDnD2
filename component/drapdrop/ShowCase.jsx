import React from 'react';
import _ from 'lodash';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
var Component1 = require('./component1/main');
var Component2 = require('./component2/main');
var Component3 = require('./component3/main');
var Component4 = require('./component4/main');
var Component5 = require('./component5/main');
var Component6 = require('./component6/main');
var Component7 = require('./component7/main');
var Component8 = require('./component8/main');
var ShowcaseLayout = React.createClass( {

  // static propTypes = {
  //   onLayoutChange: React.PropTypes.func.isRequired
  // };
  //
  // static defaultProps = {
  //   className: "layout",
  //   rowHeight: 30,
  //   cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
  //   initialLayout: generateLayout()
  // };
  //
  // state = {
  //   currentBreakpoint: 'lg',
  //   mounted: false,
  //   layouts: {lg: this.props.initialLayout},
  // };
  getInitialState: function() {
      return {
        className: "layout",
        rowHeight: 10,
        cols: {
    			lg: 12,
    			md: 10,
    			sm: 6,
    			xs: 4,
    			xxs: 2
    		},
        currentBreakpoint: 'lg',
    		mounted: false,
    		layouts: {
    			lg: generateLayout()
    		},
        mapLayOuts:{},
        addComponent:"component1",
        newCounter :0
      }
  },

  // componentDidMount: function() {
  //   this.setState({mounted: true});
  // },

  generateDOM: function() {
    return _.map(this.state.layouts.lg, function (l, i) {

				return (
					<div key={i}>
          {(() => {
            var className = '';
            if (l.type === 'component1') {
              return (
                <div className={className}>
                  <Component1></Component1>
                </div>
              )
            }
            if (l.type === 'component2') {
              return (
                <div className={className}>
                  <Component2></Component2>
                </div>
              )
            }
            if (l.type === 'component3') {
              return (
                <div className={className}>
                  <Component3></Component3>
                </div>
              )
            }
            if (l.type === 'component4') {
              return (
                <div className={className}>
                  <Component4></Component4>
                </div>
              )
            }
            if (l.type === 'component5') {
              return (
                <div className={className}>
                  <Component5></Component5>
                </div>
              )
            }
            if (l.type === 'component6') {
              return (
                <div className={className}>
                  <Component6></Component6>
                </div>
              )
            }
            if (l.type === 'component7') {
              return (
                <div className={className}>
                  <Component7></Component7>
                </div>
              )
            }
            if (l.type === 'component8') {
              return (
                <div className={className}>
                  <Component8></Component8>
                </div>
              )
            }

          })()}
					</div>
				);

    });
  },

  // onBreakpointChange : function(breakpoint){
  //   this.setState({
  //     currentBreakpoint: breakpoint
  //   });
  // },

  // onLayoutChange :function(layout, layouts) {
  //   this.props.onLayoutChange(layout, layouts);
  // },

  // onNewLayout :function (){
  //   this.setState({
  //     layouts: {lg: generateLayout()}
  //   });
  // },
  onAddItem:function() {
    /*eslint no-console: 0*/
    console.log('adding', 'n' + this.state.newCounter);
    var layouts=this.state.layouts;

      layouts.lg= this.state.layouts.lg.concat({
        i: 'n' + this.state.newCounter,
        x: layouts.lg.length * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
    });

      this.setState({layouts: layouts,newCounter: this.state.newCounter + 1});
// <button onClick={this.onAddItem}>Add item</button>
  },

  render: function() {
    return (
      <div className="  layoutChange">



      <ResponsiveReactGridLayout
        {...this.props}
        layouts={this.state.layouts}>
        {this.generateDOM()}
      </ResponsiveReactGridLayout>
      </div>
    );
  }
});

module.exports = ShowcaseLayout;

function generateLayout() {
  var dataInitLayouts = [
		{
			"x": 2,
			"y": 4,
			"w": 2,
			"h": 3,
			"i": "0",
			"type": "component1"
		}, {
			"x": 8,
			"y": 0,
			"w": 2,
			"h": 5,
			"i": "1",
			"type": "component2"
		}, {
			"x": 10,
			"y": 0,
			"w": 2,
			"h": 3,
			"i": "2",
			"type": "component3"
		}, {
			"x": 2,
			"y": 0,
			"w": 2,
			"h": 2,
			"i": "3",
			"type": "component4"
		}, {
			"x": 8,
			"y": 0,
			"w": 2,
			"h": 5,
			"i": "4",
			"type": "component5"
		}, {
			"x": 2,
			"y": 0,
			"w": 2,
			"h": 5,
			"i": "5",
			"type": "component6"
		}, {
			"x": 4,
			"y": 3,
			"w": 2,
			"h": 3,
			"i": "6",
			"type": "component7"
		}, {
			"x": 6,
			"y": 5,
			"w": 2,
			"h": 5,
			"i": "7",
			"type": "component8"
		}
	]
	return dataInitLayouts;
}
