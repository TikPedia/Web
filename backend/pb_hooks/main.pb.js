/// <reference path="../pb_data/types.d.ts" />

routerAdd(
  'GET',
  '/gdpr/download_data',
  (c) => {
    console.log("Downloading user's data");
    console.log(JSON.stringify(c.get('authRecord')));

    const record = $app.dao().findRecordById('articles', 'RECORD_ID');
  },
  $apis.requireRecordAuth('users')
);

routerAdd(
  'GET',
  '/gdpr/delete_account',
  (c) => {
    console.log("Deleting user's account");
    console.log(JSON.stringify(c.get('authRecord')));

    const record = $app.dao().findRecordById('articles', 'RECORD_ID');

    $app.dao().deleteRecord(record);
  },
  $apis.requireRecordAuth('users')
);

onAfterBootstrap(() => {
  console.log('App initialized!');
});

onModelAfterDelete((e) => {
  console.log(e.model.tableName());
  console.log(e.model.id);
  // TODO send email to user
}, 'users');
