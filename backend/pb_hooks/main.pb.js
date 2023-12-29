/// <reference path="../pb_data/types.d.ts" />

// route namespace
const ROUTE_GDPR_DOWNLOAD_DATA = 'gdpr/download_data';
const ROUTE_CREATE_ARTICLE_FROM_KEYWORD = 'articles/create_from_keyword';

routerAdd(
  'GET',
  ROUTE_GDPR_DOWNLOAD_DATA,
  (c) => {
    const utils = require(`${__hooks}/utils.js`);

    console.log("Downloading user's data");
    console.log(JSON.stringify(c.get('authRecord')));

    const record = $app.dao().findRecordById('users', c.get('authRecord').id);

    const userDataText = JSON.stringify(record);

    const result = utils.createUserDataZip(userDataText);

    const zipFile = result.path;

    const zipFileContent = $os.readFile(zipFile);

    c.response().header().set('Content-Type', 'application/zip');
    c.response()
      .header()
      .set('Content-Disposition', 'attachment; filename="user_data.zip"');

    c.response().write(zipFileContent);
    return c;

    //return zipFileContent;
  },
  $apis.requireRecordAuth('users')
);

onAfterBootstrap(() => {
  const utils = require(`${__hooks}/utils.js`);

  console.log('App initialized!');
  utils.prepareTemp();
});

onModelAfterDelete((e) => {
  console.log(e.model.tableName());
  console.log(e.model.id);
  // TODO send email to user
}, 'users');
