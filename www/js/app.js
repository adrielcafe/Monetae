// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

jQuery(function($){
    $("#value").maskMoney();
    $("#result").maskMoney();

    $("#convert").on("click", function(e){
        e.preventDefault();
        var from = $("#from :selected").text();
        var to = $("#to :selected").text();
        var fromTo = from +"_"+ to;
        var api = "http://www.freecurrencyconverterapi.com/api/v3/convert?q="+fromTo+"&compact=y&callback=?"
        $.getJSON(api).done(function(data) {
          var value = parseFloat($("#value").val().replace(",", ""));
          var result = value * data[fromTo].val;
          $("#result").maskMoney('mask', result)
        });
    });
});