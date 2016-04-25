var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    tagName:  'a',
    className: 'list-group-item',
    template: '#user_view',
    attributes: function() {
        return {
            href: '#'
        }
    },
    events: {
        'click': 'onClickUser'
    },
    onClickUser: function() {
        this.$el.siblings('.selected').removeClass('selected');
        this.$el.addClass('selected');
        this.triggerMethod('show:user');
    }
});

