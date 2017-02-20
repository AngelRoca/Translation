(function (angular){
'use strict';

/**
 * @ngdoc service
 * @name translateApp.Translation
 * @description
 * # Translation
 * Service in the translateApp.
 */
 console.log(angular);
angular.module('Translation',[])
  .service('Translation', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log('estamos aqui');
  });

})(window.angular);