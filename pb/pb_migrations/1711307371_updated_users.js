/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "conversations.id ?= @request.auth.id \n  ||\n@request.auth.conversations.id ?= id"
  collection.viewRule = "conversations.id ?= @request.auth.id \n  ||\n@request.auth.conversations.id ?= id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "\nconversations.id ?= @request.auth.id \n  ||\n@request.auth.conversations.id ?= id"
  collection.viewRule = "id = @request.auth.id || conversations.id ?= @request.auth.id"

  return dao.saveCollection(collection)
})
