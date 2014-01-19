(function(){if (Meteor.isClient) {
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

        Meteor.call("checkDPLA", function(err,res){
          console.log(res.content);
        });
      
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.methods({
      checkDPLA: function(){
        this.unblock();
        return Meteor.http.get("http://api.dp.la/v2/items?q=kittens&api_key=b2e5bb78379ad55ead9a148202c8e5fd");

      }

    });
  });
}

})();
