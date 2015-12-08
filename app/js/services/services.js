define([
  // Standard Libs
  'Console',        // lib/console/console
  'Underscore',   // lib/underscore/underscore

  // Custom Services
  'services/DataService',
  'services/UserService'
], function(Console, _, ds, us) {
  "use strict";
  Console.group("Entering Service module.");
  //Console.info("DataService", ds);

  var services = {
    DataService: ds,
    UserService: us
  };
  Console.info("Registered services: ", services);

  var initialize = function (angModule) {
    _.each(services,function(service,name){
      angModule.factory(name,service);
    });
    Console.debug("Custom services initialized.");
  };

  Console.groupEnd();
  return {
    initialize: initialize
  };
});
