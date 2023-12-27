/// <reference path="../pb_data/types.d.ts" />

routerAdd(
  'GET',
  '/gdpr/download_data',
  (c) => {
    console.log("Downloading user's data");
    console.log(JSON.stringify(c.get('authRecord')));

    const record = $app.dao().findRecordById('users', c.get('authRecord').id);

    const userDataText = JSON.stringify(record);
    const userDataBlob = new Blob([userDataText], { type: 'text/plain' });

    const file = new File([userDataBlob], 'user_data.txt');
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
