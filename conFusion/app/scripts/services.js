'use strict';

var ngModule = angular.module('confusionApp');

ngModule.constant("baseUrl", "http://localhost:3000/");

// Services
ngModule.service('menuFactory',
    [
        '$resource', 'baseUrl', function ($resource, baseUrl) {

            this.getDishes = function () {
                return $resource(baseUrl + "dishes/:id",
                    null,
                    {
                        'update': {
                            method: 'PUT'
                        }
                    });
            };

            this.getPromotions = function () {
                return $resource(baseUrl + "promotions/:id",
                    null,
                    {
                        'update': {
                            method: 'PUT'
                        }
                    });
            };
        }
    ]);


// Factories
ngModule.factory('corporateFactory', ['$resource', 'baseUrl', function ($resource, baseUrl) {

    var corpfac = {};

    corpfac.getLeaders = function () {
        return $resource(baseUrl + "leadership/:id",
            null,
            {
                'update': {
                    method: 'PUT'
                }
            });
    };

    return corpfac;
}]);

ngModule.factory('feedbackFactory', ['$resource', 'baseUrl', function ($resource, baseUrl) {

    var feedbackFac = {};

    feedbackFac.getFeedback = function() {
        return $resource(baseUrl + "feedback/", null,
            {
                'save': {
                    method: 'POST'
                }
            });
    };

    return feedbackFac;
}]);
