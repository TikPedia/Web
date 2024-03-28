/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vdpjjhnwcl68bet",
    "created": "2023-12-27 13:21:17.122Z",
    "updated": "2023-12-27 13:21:17.122Z",
    "name": "gdpr_requests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3dv1arjt",
        "name": "vault",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "application/zip",
            "application/x-7z-compressed",
            "application/x-bzip2"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": true
        }
      },
      {
        "system": false,
        "id": "2mlboitw",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "m9ptwco6",
        "name": "passkey",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vdpjjhnwcl68bet");

  return dao.deleteCollection(collection);
})
