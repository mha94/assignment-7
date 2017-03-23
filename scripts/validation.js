(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },

        decaf: function(decaf, value) {
            var orderDecaf = decaf || '';
            //console.log(orderDecaf, value);
            if (orderDecaf.indexOf('decaf') !== -1 && value > 20) {
                console.log('false');
                return false;
            } else {
                console.log('true');
                return true;
            }
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
