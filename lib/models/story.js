'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uniqueValidator = require('mongoose-unique-validator');
    
// Schema
var StorySchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true, unique: false },
  storyline: { type: String, required: false, unique: false },
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

StorySchema.path('author').validate(function (title) {
  return title !== '' && title !== undefined;
}, 'each story has to have an author');

mongoose.model('Story', StorySchema);
