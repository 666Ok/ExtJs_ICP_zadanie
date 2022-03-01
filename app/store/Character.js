Ext.define("MyApp.store.Character", {
  extend: "Ext.data.Store",

  alias: "store.character",

  model: "MyApp.model.Character",

  //itemId: "character",
  //storeId: "character",
  autoLoad: true,

  proxy: {
    type: "rest",
    url: "https://hp-api.herokuapp.com/api/characters",
    useDefaultXhrHeader: false,
    reader: {
      type: "json",
      headers: { Accept: "application/json" },
    },
  },
  listeners: {
    load: function (store, records, success, operation, options) {
      store.loadData(records.slice(0, 6)); //Everything is loaded from api, but only 6 records showing.
    },
  },
});
