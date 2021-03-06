define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var BookModel = Backbone.Model.extend({

        idAttribute: '_id',

        defaults: {
            title: 'Book Title',
            author: 'Unknown Author',
            isbn: 'isbn'
        },

        parse: function(response)  {
            return response;
        }
    });

    return BookModel;
});
