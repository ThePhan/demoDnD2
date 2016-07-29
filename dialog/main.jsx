import React from 'react';
import * as storeAction from './store/actions';
import map from 'lodash/map';
import SupportUserLoginDialog from './Dialog';

// import Store from './Store/store';
import Main from 'components/main';
import Button from 'components/button';
var Store = require('./store');
var Common = require('frankly/lib/common');
var FormTextInput = require('components/forms/form-text-input');
/**
 * Internal dependencies
 */

module.exports = React.createClass({
	getInitialState: function() {
		var state = {
			listBook: [],
			data: '',
			showDialog: false
		}
		return Common.extend(Store.get(), state);
	},
	componentWillMount: function() {
		console.log("componentWillMount");
		// Store.on('change');
		storeAction.getAllItem(function(data) {
			this.setState({listBook: data.body});
			console.log("ssssssss " + this.state.listBook.length);
			console.log(data.body + "ffafafafafa");
		}.bind(this));
		// this.setState({listBook: storeAction.getAllItem()});
	},

	handleDelete: function(id) {
		storeAction.deleteUser(id, function(data) {
			// this.setState({listBook:this.state});
			console.log("success ok");
		});
	},
	handleOnChange: function(event){
		this.setState({data: event.target.value});
	},



	onCloseDialog: function(){
		this.setState( { showDialog: false } );
	},
	opentDialog: function(){
		 this.setState( { showDialog: true } );
	},

	render: function() {
		var textLengthDefauld = 0;
		var textChange = textLengthDefauld + this.state.data.length;
		console.log(this.state.data.length + " fsfsfsfsfs");
		return (
			<Main>
				<div>
				<p> Length text inputed: {textChange}</p>
					<div>
						<FormTextInput placeholder="input text..........." value={this.state.data} onChange={this.handleOnChange} />
					</div>
					<p> {this.state.data} </p>
					<div>
						{this.state.listBook.map(function(User, index) {
							return (
								<li key={index}>
									<div>
										<p>
											ID: #{User._id}
										</p>
										<p>
											User name: {User.lastName}
											{User.firstName}
										</p>
										<Button onClick={this.handleDelete.bind(this, User._id)}>
											Delete user
										</Button>
									</div>
								</li>
							)
						}.bind(this))}
					</div>
					<Button onClick={this.opentDialog}> Open </Button>
					<SupportUserLoginDialog onCloseDialog={this.onCloseDialog} showDialog={this.state.showDialog}/>

				</div>
			</Main>
		);
	}
});
