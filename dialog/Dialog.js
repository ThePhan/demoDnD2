import React from 'react';
import map from 'lodash/map';
import Dialog from 'components/dialog';


var Dialogdemo = React.createClass({
  getInitialState: function() {
        return {

        };
    },
    // onCloseDialog: function(){
    //   this.setState({showDialog: false});
    // },

  render: function(){
    var buttons = [
            { action: 'cancel', label: this.translate( 'Cancel' ), onClick: this.props.onCloseDialog },
            { action: 'delete', label: this.translate( 'Delete Everything' ), isPrimary: true }

        ];
    return(
      <Dialog isVisible={ this.props.showDialog } buttons={ buttons } >
                  <h1>{ this.translate( 'Confirmation' ) }</h1>
                  <p>{ this.translate( 'Do you want to delete everything?' ) }</p>
      </Dialog>
    );
  }
});

export default Dialogdemo;
