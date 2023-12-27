/// <reference path="../pb_data/types.d.ts" />
routerAdd('GET', '/hello/:name', (c) => {
  let name = c.pathParam('name');

  return c.json(200, { message: 'Hello ' + name });
});

onAfterBootstrap(() => {
  console.log('App initialized!');
});
