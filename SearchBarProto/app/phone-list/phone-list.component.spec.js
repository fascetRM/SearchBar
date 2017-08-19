'use strict';

describe('searchBar', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('searchBar'));

  // Test the controller
  describe('PhoneListController', function() {

    it('', inject(function($componentController) {
      var ctrl = $componentController('phoneList');

      expect(ctrl.phones.length).toBe(3);
    }));

  });

});
