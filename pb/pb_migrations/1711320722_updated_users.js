/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.conversations.id ?= id\n  ||\nconversations.id ?= @request.auth.id"
  collection.viewRule = "@request.auth.conversations.id ?= id\n  ||\nconversations.id ?= @request.auth.id "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.conversations.id ?= id"
  collection.viewRule = "conversations.id ?= @request.auth.id \n  ||\n@request.auth.conversations.id ?= id"

  return dao.saveCollection(collection)
})
