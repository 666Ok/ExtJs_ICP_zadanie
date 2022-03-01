/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "MyApp.Application",

  name: "MyApp",

  requires: [

    "MyApp.*",
  ],


  // The name of the initial view to create.
  mainView: "MyApp.view.main.Main",
});
