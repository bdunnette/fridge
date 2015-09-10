FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "wikiHome"});
  }
});

FlowRouter.route('/:pageId', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "wikiPage"});
  }
});

FlowRouter.route('/:pageId/edit', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "wikiPageEdit"});
  }
});

Template.wikiHome.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('pages');
  });
});

Template.wikiHome.helpers({
  pages: function() {
    var pages = Pages.find();
    return pages;
  }
});

Template.wikiPage.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var pageId = FlowRouter.getParam('pageId');
    self.subscribe('page', pageId);
  });
});

Template.wikiPage.helpers({
  page: function() {
    var pageId = FlowRouter.getParam('pageId');
    var page = Pages.findOne({_id: pageId}) || {};
    return page;
  }
});