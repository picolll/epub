define(function() {
    'use strict';

    var ApiUrls = (function(){
        var urls = {
            library:  function() {
                return '/api/library';
            },
            book: function(id) {
                return '/api/book/'+ id;
            },
            registration: function() {
                return '/api/registration';
            },
            session: function() {
                return '/api/session';
            },
            reader: function(id) {
                return '/api/reader/' + id;
            },
            dictionary: function() {
                return '/api/dictionary'
            },
            translator: function() {
                return '/api/translator'
            },
            wiki: function() {
                return '/api/wiki'
            }
        };

        var getUrl = function(type) {
            return urls[type] ? urls[type].apply(this, [].slice.call(arguments, 1)) : undefined;
        };

        return {
            getUrl: getUrl
        };
    })();

    return ApiUrls;
});
