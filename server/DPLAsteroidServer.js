var base_url = 'http://api.dp.la/v2/';
var _API_KEY = 'b2e5bb78379ad55ead9a148202c8e5fd';


Meteor.startup(function () {
  // code to run on server at startup
  Meteor.methods({
    searchDPLA: function(qterm){
      this.unblock();
      search_url = base_url + 'items?q=' + this.qterm + '&api_key=' + _API_KEY
      //return Meteor.http.get("http://api.dp.la/v2/items?q=kittens&api_key=b2e5bb78379ad55ead9a148202c8e5fd");
      return Meteor.http.get(search_url);

    }

  });
});