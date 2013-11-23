'use strict';

var mongoose = require('mongoose'),
    ObjectId =mongoose.Types.ObjectId,
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
    console.log(req.params.id);
    return Story.find({ "_id": new ObjectId(req.params.id) })
      .exec(function (err, story) {
        if (!err) {
          var result = story[0];
          console.log(result);
          return res.json(result);
        } else {
          return res.send(err);
        }
      });
  }
}
