/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "(\n  (\n    @request.auth.conversations.id ?= id \n      || \n    conversations.id ?= @request.auth.id\n  )\n    &&\n  @request.query.add = \"\"\n)\n  ||\n(\n  @request.query.add != \"\"\n    &&\n  @request.auth.id != id\n)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "(\n  (\n    @request.auth.conversations.id ?= id \n      || \n    conversations.id ?= @request.auth.id\n  )\n)\n  ||\n(\n  @request.query.add != \"\"\n    &&\n  @request.auth.id != id\n)"

  return dao.saveCollection(collection)
})
