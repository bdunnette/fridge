Meteor.publish("allPages", function () {
  return Pages.find();
});

Meteor.publish("page", function (pageId) {
  return Pages.find({_id: pageId});
});