Pages = new Mongo.Collection('pages');

var PageSchema = new SimpleSchema({
  title: {
    type: String
  },
  body: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        settings: { // summernote options goes here (minHeight: and height: are useful)
          // if you want to use cfs instead of base64 inlining your images
          // imageCollection='attachedImages'
          // if using s3 provide at least a bucket, and maybe a subfolder
          // s3bucket='bucket name'
          // s3subfolder='offering'
        }
      }
    }
  }
});

Pages.attachSchema(PageSchema);