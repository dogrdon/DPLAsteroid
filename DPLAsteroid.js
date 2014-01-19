base_url = 'http://api.dp.la/v2/';
_API_KEY = 'b2e5bb78379ad55ead9a148202c8e5fd';
qterm = 'boxing';


if (Meteor.isClient) {
  Template.main.greeting = function () {
    return "DPLAsteroid";
  };

  Template.main.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined') 
        console.log("You pressed the button");
        //Meteor.http.get("http://api.dp.la/v2/items?q=kittens&api_key=b2e5bb78379ad55ead9a148202c8e5fd", function(error, result) {
          //if (result.statusCode === 200) {
            //for (var i = 0; i < result.data.results.length; i++) {
            //  MyCollection.insert(result.data.results[i])
            //}
            //console.log(result);
          //}
          //else {
          //  console.log(error);
          //}

        Meteor.call("searchDPLA", function(err,res){
          console.log(res.content);
          console.log('you searched for ' + qterm)
        });
      
    }
  });
}

if (Meteor.isServer) {
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
}
