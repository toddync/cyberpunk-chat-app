/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "128y9ktgk537mjr",
    "created": "2024-03-22 18:13:27.644Z",
    "updated": "2024-03-22 18:13:27.644Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sgz4zjdb",
        "name": "content",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "klkwrwws",
        "name": "owner",
        "type": "relation",
        "required": true,
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
        "id": "2jcgn2gg",
        "name": "receiver",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = owner.id\n  ||\n@request.auth.id = receiver.id",
    "viewRule": "@request.auth.id = owner.id\n  ||\n@request.auth.id = receiver.id",
    "createRule": "@request.auth.id = owner.id",
    "updateRule": "@request.auth.id = owner.id",
    "deleteRule": "@request.auth.id = owner.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("128y9ktgk537mjr");

  return dao.deleteCollection(collection);
})
