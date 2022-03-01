Ext.define("MyApp.model.Character", {
  extend: "Ext.data.Model",

  alias: "model.Character",

  fields: [
    { name: "name", type: "string" },
    { name: "actor", type: "string" },
    { name: "gender", type: "string" },
    { name: "house", type: "string" },
    { name: "yearOfBirth", type: "int" },
    { name: "alive", type: "boolean" },

  ],
});
