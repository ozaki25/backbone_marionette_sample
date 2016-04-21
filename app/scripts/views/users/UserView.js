var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    tagName:  'a',
    className: 'list-group-item',
    template: '#user_view',
    attributes: function() {
        return {
            href: '#'
        }
    }
});

