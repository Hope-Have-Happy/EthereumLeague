module.exports = {
  build: {
    "index.html": "index.html",
    "league.html": "league.html",
    "myLeagues.html": "myLeagues.html",
    "admin.html": "admin.html",
    "join.html": "join.html",
    "leagueDetails.html": "leagueDetails.html",
    "css/bootstrap.css": "css/bootstrap.css",
    "css/etherLeague.css": "css/etherLeague.css",
    "app.js": [
      "javascripts/app.js"
    ],
    "angular.js" :[
    	"javascripts/_vendor/angular.js",
    	"javascripts/_vendor/angular-route.js"
    ],	
    "jquery.js" :[
    	"javascripts/_vendor/jquery.js",
    ],
    "bootstrap.js" :[
    	"javascripts/_vendor/bootstrap.js",
    ],
    "etherLeagueControllers.js" :[
      "javascripts/LeagueListControllerCommon.js",
      "javascripts/MyLeaguesController.js",
      "javascripts/AdminController.js",
      "javascripts/JoinLeagueController.js",
      "javascripts/LeagueDetailsController.js"
    ],
    "etherLeagueServices.js" :[
      "javascripts/AccountsService.js",
      "javascripts/LeagueAggregateService.js",
      "javascripts/ResultAggregateService.js"
    ],
    "LeagueData.js": "javascripts/LeagueCacheService.js",
    "etherLeague.js": [
      "javascripts/_vendor/lightwallet.js",
      "javascripts/_vendor/hooked-web3-provider.js",  
      "javascripts/etherLeagueController.js"
    ]
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
