var $ = jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Bootstrap = require('bootstrap');
var Users = require('./collections/Users.js');
var HeaderView = require('./views/HeaderView');
var MainView = require('./views/MainView');

var App = new Marionette.Application({
    regions: {
        header: '#header',
        main: '#main'
    },
    onStart: function() {
        var users = [
            {id: 1, name: 'テストユーザ１', posision: 'ピッチャー'},
            {id: 2, name: 'テストユーザ２', posision: 'キャッチャー'},
            {id: 3, name: 'テストユーザ３', posision: 'ファースト'},
            {id: 4, name: 'テストユーザ４', posision: 'セカンド'},
            {id: 5, name: 'テストユーザ５', posision: 'サード'},
            {id: 6, name: 'テストユーザ６', posision: 'ショート'}
        ]
        var userCollection = new Users(users);
        this.getRegion('header').show(new HeaderView());
        this.getRegion('main').show(new MainView({collection: userCollection}));
    }
});

App.start();
