Package.describe({
  name: 'tutorial-registry',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Register tutorials in a central location',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    "jsx",
    'check'
  ]);
  api.versionsFrom('1.1.0.2');
  api.addFiles('tutorial-registry.jsx');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tutorial-registry');
  api.addFiles('tutorial-registry-tests.js');
});