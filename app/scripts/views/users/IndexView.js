var Marionette = require('backbone.marionette');
var UserView = require('./UserView');

module.exports = Marionette.CompositeView.extend({
    template: '#index_user_view',
    childView: UserView,
    childViewContainer: '#user_list'
});
