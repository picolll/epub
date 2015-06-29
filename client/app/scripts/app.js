define(function(require){
    'use strict';

    var Backbone = require('backbone'),
        Header = require('views/header'),
        Login = require('views/login'),
        Library = require('views/library'),
        Footer = require('views/footer'),
        MainPage = require('views/home'),
        Reader = require('views/reader');

    /**
     * TODO write tests for Router
     */
    var Router = Backbone.Router.extend({

        initialize: function(){
            this.header = new Header();
            this.header.render();

            var footer = new Footer();
            footer.render();

            this.listenTo(Backbone, 'router:go', this.go);
        },

        go: function(route) {
            this.navigate(route, {trigger:true, replace:false})
        },

        routes: {
            'login': 'showLogin',
            'library': 'showLibrary',
            'books/:id': 'showBook',
            'reader/:id': 'reader',
            '*path': 'defaultRoute'
        },

        defaultRoute: function(){
            this.showView(new MainPage(), {requiresAuth: false});
        },

        showLogin: function() {
            this.showView(new Login(), {requiresAuth: false});
            this.header.model.set('title', 'Login');
        },

        showLibrary: function() {
            this.showView(new Library(), {requiresAuth: true});
            this.header.model.set('title', 'Library');
            //this.navigate('library', true);
        },

        reader: function(id) {
            this.showView(new Reader(id), {requiresAuth: true});
            this.header.model.set('title', 'Book');
            //this.navigate('reader/'+id, true);
        },

        showView: function(view, options) {

            if(this.currentView) this.currentView.remove();

            if(options.requiresAuth){
                var self = this;
                App.session.check({
                    success: function(){
                        //additional condition if not authenticated
                        $('.content').html(view.render().$el);
                    },
                    error: function(){
                        self.go('login');
                    }
                });
            } else {
                $('.content').html(view.render().$el);
            }
            this.currentView = view;
            //return view;
        }

    });

    return Router;
});