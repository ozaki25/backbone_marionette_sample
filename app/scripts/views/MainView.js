var Marionette = require('backbone.marionette');
var Users = require('../collections/Users.js');
var IndexView = require('./users/IndexView');
var ShowView = require('./users/ShowView');

module.exports = Marionette.LayoutView.extend({
    template: '#main_view',
    regions: {
        sideMenu: '#side_menu',
        mainContent: '#main_content'
    },
    childEvents: {
        'show:user': 'showUser'
    },
    onRender: function() {
        this.getRegion('sideMenu').show(new IndexView({collection: this.collection}));
        this.getRegion('mainContent').show(new ShowView({model: this.collection.first()}));
    },
    showUser: function(e) {
        this.getRegion('mainContent').show(new ShowView({model: e.model}));
    }
});
