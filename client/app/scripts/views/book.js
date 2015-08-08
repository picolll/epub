define(function(require){
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        Modal = require('views/modal');

    var BookView = Backbone.View.extend({

        template: JST['app/scripts/templates/book.hbs'],

        events: {
            'click a#open': 'openBook',
            'click a#delete': 'deleteBook'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        openBook: function(e){
            e.preventDefault();

            var url = '/reader/'+this.model.get('name');
            Backbone.trigger('router:go', url);
        },

        deleteBook: function(e) {
            e.preventDefault();

            this.modal = new Modal({
                callback: this.model.destroy,
                title: 'Delete book',
                message: 'Are you sure you want to delete the book?'
            });
//            this.model.destroy({
//                success: this.deleteBookCallback.bind(this),
//                wait: true
//            });
        },

        deleteBookCallback: function() {
            Backbone.trigger('router:go', '/');
        }
    });

    return BookView;
});
