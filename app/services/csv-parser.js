import Ember from 'ember';

export default Ember.Service.extend({

	/* using papa parse to parse our csv data and return a promise.*/
	model: function() {
		var promise = new Promise(function(resolve) {
			Papa.parse('data/issues-data.csv', {
				download:true,
				header:true,
				complete:function(results) {
					resolve(results);
				}
			});
		});
		return promise;
	}


});
