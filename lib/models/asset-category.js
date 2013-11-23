'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uniqueValidator = require('mongoose-unique-validator');
    
// Schema
var AssetCategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  assets: [
    {
      name: String,
      tags: [String],
      url: { type: String, required: true, unique: false },
    }
  ]
});

// Validations
AssetCategorySchema.path('name').validate(function (name) {
  return name !== undefined;
}, 'each AssetCategory has to have a name');

AssetCategorySchema.plugin(uniqueValidator);

mongoose.model('AssetCategory', AssetCategorySchema);
