Pages = new Ground.Collection("pages");

PagesSchema = new SimpleSchema({
  title: {
    type: String,
    unique: true
  },
  body: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // summernote options goes here
        height: '400',
        settings:{
        toolbar: [
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['para', ['ul', 'ol']],
          ['insert', ['picture', 'link', 'hello']]
        ]
        }
      }
    }
  }
});

Pages.attachSchema(PagesSchema);

Pages.initEasySearch(['title', 'body'], {
    'limit' : 20
});

Pages.allow({
  insert: function (userId, doc) {
    return true
  },
  update: function (userId, doc, fieldNames, modifier) {
    return true
  },
  remove: function (userId, doc) {
    return true
  }
});

Pages.deny({
  insert: function (userId, doc) {
    return false
  },
  update: function (userId, doc, fieldNames, modifier) {
    return false
  },
  remove: function (userId, doc) {
    return false
  }
});