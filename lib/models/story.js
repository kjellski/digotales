'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var StorySchema = new Schema({
  title: String,
  author: String,
  storyline: String,
  scenes: [
    {
      title: String,
      data: Buffer
    }
  ]
});

// Validations
StorySchema.path('scenes').validate(function (scenes) {
  return scenes.length > 0;
}, 'each story has to have at least one scene');

StorySchema.path('title').validate(function (title) {
  return title !== '' && title !== undefined;
}, 'each story has to have a title');

StorySchema.path('author').validate(function (title) {
  return title !== '' && title !== undefined;
}, 'each story has to have an author');

mongoose.model('Story', StorySchema);
