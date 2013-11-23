'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var AssetsSchema = new Schema({
  category: String,
  assets: [
    {
      name: String,
      tags: [String],
      url: String
    }
  ]
});

// Validations
AssetsSchema.path('category').validate(function (category) {
  return category !== undefined;
}, 'each AssetCategory has to have a category');

mongoose.model('AssetCategory', AssetsSchema);
