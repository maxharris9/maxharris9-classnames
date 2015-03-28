Package.describe({
  summary: "React classnames by Jed Watson, repackaged for Meteor",
  version: "0.0.1",
  git: "https://github.com/maxharris9/maxharris9-classnames",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');
  api.addFiles('classnames.js', ['client', 'server']);
  api.export(['classNames'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use(['maxharris9:classnames', 'tinytest', 'test-helpers']);
  api.addFiles('maxharris9-classnames-tests.js', ['client', 'server']);
});
