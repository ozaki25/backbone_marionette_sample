var $ = jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Bootstrap = require('bootstrap');
var Users = require('./collections/Users.js');
var IndexView = require('./views/users/IndexView');
var ShowView = require('./views/users/ShowView');

var App = new Marionette.Application({
    regions: {
        main: '#main',
        sideMenu: '#side_menu'
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
        this.getRegion('sideMenu').show(new IndexView({collection: userCollection}));
        this.getRegion('main').show(new ShowView({model: userCollection.first()}));
    }
});

App.start();
