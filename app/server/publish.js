/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('pages', function (/* args */) {
  return Pages.find();
});

Meteor.publish('page', function (pageId) {
  return Pages.find({_id: pageId});
});