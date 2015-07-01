Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('pages', {
  name: 'pages',
  controller: 'PagesController',
  action: 'action',
  where: 'client'
});

Router.route('page/:_id', {
  name: 'page',
  controller: 'PageController',
  action: 'action',
  where: 'client'
});

Router.route('search', {
  name: 'search',
  controller: 'SearchController',
  action: 'action',
  where: 'client'
});

Router.route('page/:_id/edit', {
  name: 'pageEdit',
  controller: 'PageEditController',
  action: 'action',
  where: 'client'
});