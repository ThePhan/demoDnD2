/**
 * External dependencies
 */
var React = require( 'react' );
var overviewData;

var Component1 = React.createClass( {
  displayName: 'DashboardV2-component1',

  getInitialState: function() {
  		return {
  		};
  },

	getDefaultProps: function() {
		return {
		};
	},
	

	render: function() {
		var self = this.state.overviewData;
		return (
      <div className="widget ">
      	<h1> hello </h1>
      </div>
		);
	}
} );

module.exports = Component1;
