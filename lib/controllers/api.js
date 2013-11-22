'use strict';

var mongoose = require('mongoose'),
    Story = mongoose.model('Story'),
    async = require('async');


exports.stories = {
  all: function(req, res) {
    return Story.find(function (err, stories) {
      if (!err) {
        return res.json(stories);
      } else {
        return res.send(err);
      }
    });
  },
  findById: function(req, res) {
    console.log(req.body);
    return Story.find(function (err, stories) {
      if (!err) {
        return res.json(stories);
      } else {
        return res.send(err);
      }
    });
  }
}
