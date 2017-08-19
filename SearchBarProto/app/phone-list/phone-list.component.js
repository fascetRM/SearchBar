(function(){
	'use strict';

	// Register `phoneList` component, along with its associated controller and template
	angular.
	  module('phoneList').
	  component('searchBar', {
	    templateUrl: 'phone-list/phone-list.template.html',
	    controller: function PhoneListController() {
			this.activeList = [];
			this.fieldsList = [
				"a0",
				"a1",
				"a2",
				"b0",
				"b1",
				"b2",
				"c0",
				"c1",
				"c2"
			];
			this.qualifiersList = [
				"contains",
				"does not equal",
				"ends with",
				"equals",
				"greater than",
				"in",
				"less than",
				"starts with"
			];
			this.booleans = [
				"and",
				"or"
			];
			this.icon = "",
			this.validationMessage = "";
			this.showHelp = false;
	    }
	  });
})();

(function(){
	'use strict';

	// Register `phoneList` component, along with its associated controller and template
	angular.
	  module('phoneList').
	  filter('searchFilter', function(){
		return function(activeListItem, query){
			var output;
			debugger;
			return output;
			};
	  });
})();