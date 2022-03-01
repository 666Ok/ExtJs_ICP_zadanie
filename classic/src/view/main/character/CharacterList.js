Ext.define("MyApp.view.character.CharacterList", {
  extend: "Ext.grid.Panel",
  xtype: "characterList",
  requires: ["MyApp.store.Character"],

  title: "Character List",

  store: {
    type: "character",
  },

  //controller: 'character-list',

  columns: [
    { text: "Name", dataIndex: "name", flex: 2 },
    { text: "Actor", dataIndex: "actor", flex: 2 },
    { text: "House", dataIndex: "house", flex: 2 },
    { text: "Gender", dataIndex: "gender", flex: 1 },
    { text: "Year Of Birth", dataIndex: "yearOfBirth", flex: 1 },
    { text: "Alive", dataIndex: "alive", flex: 1 },
  ],
});
