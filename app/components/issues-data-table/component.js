import Ember from 'ember';

export default Ember.Component.extend({
  sortProperty: 'submissionDate',
  theFilter: "",
  sortAscending: true,
  sortedRows: Ember.computed.sort('filterResults', 'sortDefinition'),

  // sorts the filtered array
  sortDefinition: Ember.computed('sortProperty', 'sortAscending', function() {
    let sortOrder = this.get('sortAscending') ? 'asc' : 'desc';
    return [ `${this.get('sortProperty')}:${sortOrder}` ];
  }),

  // Check to see if there's a filter match
  checkFilterMatch: function(theObject, str) {
      var field, match;
      match = false;
      for (field in theObject) {
        if (theObject[field].toString().slice(0, str.length) === str) {
          match = true;
        }
      }
      return match;
    },

    //returns a filtered array
    filterResults: (function() {
      return this.get("model").filter((function(_this) {
        return function(theObject) {
          if (_this.get("theFilter")) {
            return _this.checkFilterMatch(theObject, _this.get("theFilter"));
          } else {
            return true;
          }
        };
      })(this));
    }).property("theFilter", "sortProperty", "model"),

    actions: {
      sortColumn: function(property) {
          this.set("sortProperty", property);
          this.toggleProperty('sortAscending');
      }
    }
});
