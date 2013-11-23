'use strict';

var mongoose = require('mongoose'),
    Story = mongoose.model('Story');

Story.find({}).remove(function() {
  Story.create({
    title: 'My first Story',
    author: '@kjellski',
    storyline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend adipiscing dolor, et tincidunt lacus facilisis vel. Vivamus imperdiet mi ac eros fringilla vehicula. Proin imperdiet sapien vel vestibulum blandit. Aliquam erat volutpat. Cras tristique adipiscing mi, vel sodales lectus venenatis a. Nunc molestie lacinia faucibus. Phasellus tortor diam, ullamcorper id eleifend vel, posuere quis justo. Integer gravida ullamcorper cursus. Aenean tincidunt nisi lacus, sed eleifend purus vulputate vitae. Mauris orci sem, sagittis sed risus sit amet, consequat vehicula elit. Morbi fringilla augue ut velit pretium ornare. Integer imperdiet ut lorem sed tincidunt. Maecenas tristique nisl sit amet quam semper, id cursus urna adipiscing.',
    scenes: [
      {
        title: 'Intro',
        data: undefined
      }, {
        title: 'The End',
        data: undefined
      }
    ]
  }, {  title: 'Hotter Fuzzer',
    author: '@kjellski',
    storyline: 'Nulla facilisi. Duis placerat lectus sit amet risus rutrum auctor. Sed pulvinar vitae magna eu tempus. Vivamus lacinia viverra eleifend. Cras nec pulvinar justo, at eleifend tortor. Duis vehicula euismod turpis, at pharetra sem malesuada vel. Duis accumsan consequat urna, sit amet scelerisque dui auctor non. Ut urna orci, euismod a turpis vitae, interdum varius velit.',
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
    storyline: 'Nunc hendrerit fermentum ligula id ultricies. Maecenas ultrices, mi sit amet mattis suscipit, libero lacus viverra diam, vitae interdum risus orci eu elit. Phasellus lobortis egestas tellus non fringilla. Nulla dignissim, augue nec imperdiet dapibus, nulla arcu condimentum purus, sed porttitor sem diam sit amet nisi. Pellentesque eget ullamcorper metus. Nunc velit sem, dictum. amet nisi. Pellentesque eget ullamcorper metus. Nunc velit sem, dictum.',
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
      console.log('finished populating stories', err);
    }
  );
});