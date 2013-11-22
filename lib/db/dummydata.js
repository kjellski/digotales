'use strict';

var mongoose = require('mongoose'),
    Story = mongoose.model('Story');

Story.find({}).remove(function() {
  Story.create({
    title: 'My first Story',
    author: '@kjellski',
    scenes: [
      {
        title: 'Intro',
        data: undefined
      }, {
        title: 'The End',
        data: undefined
      }
    ]
  }, {
    title: 'Hotter Fuzzer',
    author: '@kjellski',
    scenes: [
      {
        title: 'Supercop from London',
        data: undefined
      }, {
        title: 'zombies',
        data: undefined
      }, {
        title: 'Sorry wrong film',
        data: undefined
      }
    ]
  }, {
    title: 'My SecondLife',
    author: '@kjellski',
    scenes: [
      {
        title: 'Starting',
        data: undefined
      }, {
        title: 'Uninstall',
        data: undefined
      }
    ]
  }, function(err) {
      console.log('finished populating stories');
    }
  );
});