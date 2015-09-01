Package.describe({
  name: 'dvz:orion-unstyled',
  summary: 'Unstyled admin theme for orion.',
  version: '0.1.1',
  git: 'https://github.com/amazingBastard/orion-unstyled'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'meteor-platform',
    'orionjs:core@1.4.0',
    'aldeed:autoform@5.4.0',
    'aldeed:tabular@1.1.0',
    'useraccounts:unstyled@1.11.1'
  ]);

  api.imply([
    'orionjs:core',
    'aldeed:autoform',
    'useraccounts:unstyled'
  ]);

  api.addFiles([
    'lib/init.js',
    'lib/tabular.js'
  ]);

  api.addFiles([
    'lib/views/layout/layout.html',
    'lib/views/layout/layout.js',
    'lib/views/sidebar/sidebar.html',
    'lib/views/accounts/login.html',
    'lib/views/accounts/register-with-invitation.html',
    'lib/views/accounts/index.html',
    'lib/views/accounts/password.html',
    'lib/views/accounts/profile.html',
    'lib/views/accounts/profile.js',
    'lib/views/accounts/accounts.html',
    'lib/views/accounts/update.html',
    'lib/views/accounts/create.html',
    'lib/views/config/update.html',
    'lib/views/config/update.js',
    'lib/views/dictionary/update.html',
    'lib/views/dictionary/update.js',
    'lib/views/collections/index.html',
    'lib/views/collections/index.js',
    'lib/views/collections/create.html',
    'lib/views/collections/create.js',
    'lib/views/collections/update.html',
    'lib/views/collections/update.js',
    'lib/views/collections/delete.html',
    'lib/views/pages/index.html',
    'lib/views/pages/create.html',
    'lib/views/pages/update.html',
    'lib/views/pages/delete.html',
    'lib/views/pages/pages.js',
  ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:core');
});
