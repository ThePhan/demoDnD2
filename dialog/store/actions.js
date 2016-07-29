import Dispatcher from 'dispatcher';
import {
	actions
} from './constants';
import request from 'superagent';
var noCache = require('superagent-no-cache');


export function getAllItem(callback) {
	request.get('http://localhost:8181/user')
		.set('Accept', 'application/json')
		.end(function(err, data) {
			if (err) {
				console.log("err ddddddddddddddddd " + err);
			} else {
				callback(data);
				console.log(data + " daldkadlkadlkaldkla");
			}

		});
}

export function deleteUser(id, callback) {
	request.del('http://localhost:8181/user')
		.set('Accept', 'application/json')
    .send({_id: id})
		.end(function(err, res) {
			callback(res);
			console.log("sfdfsf " + res);
		});
}
