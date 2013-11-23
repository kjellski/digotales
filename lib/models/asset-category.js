'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var AssetCategorySchema = new Schema({
  name: String,
  assets: [
    {
      name: String,
      tags: [String],
      url: String
    }
  ]
});

// Validations
AssetCategorySchema.path('name').validate(function (name) {
  return name !== undefined;
}, 'each AssetCategory has to have a name');

mongoose.model('AssetCategory', AssetCategorySchema);
