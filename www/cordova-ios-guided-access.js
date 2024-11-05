var exec = require('cordova/exec')

function processErr(reject) {
	return (errorMessage)=> reject(new Error(errorMessage))
}

var WPGuidedAccess = {
	start: function(success, error) {
		return new Promise((resolve,reject)=> {
			exec(resolve, processErr(reject), 'WPGuidedAccessMode', 'start', []);
		})
	},
	end: function(success, error) {
		return new Promise((resolve,reject)=> {
			exec(resolve, processErr(reject), 'WPGuidedAccessMode', 'end', []);
		})
	},
	isStarted: function(success, error) {
		return new Promise((resolve,reject)=> {
			exec(resolve, processErr(reject), 'WPGuidedAccessMode', 'isEnabled', []);
		})
	}
};

module.exports = WPGuidedAccess;
