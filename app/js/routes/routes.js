define([
  'text!templates/Home.html',
  'text!templates/Data.html',
  'text!templates/User.html'
],function(homeTemplate, dataTemplate, userTemplate){
  return {
    home: {
      title: 'Home',
      route: '/home',
      controller: 'home',
      template: homeTemplate
    },

    user: {
      title: 'User',
      route: '/user',
      controller: 'user',
      template: userTemplate
    },

    creation: {
      title: 'Data List',
      route: '/data',
      controller: 'data',
      template: dataTemplate
    }

  };
});
