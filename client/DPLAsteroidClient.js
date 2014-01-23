Template.main.events({
  'click input#button' : function () {
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
      var qterm='';
      qterm=document.getElementById('qterm').value;
      Meteor.call("searchDPLA", qterm, function(err,res){
        
        if (err){
          window.alert("Error: " + err.reason);
          console.log("error occured on receiving data on server. ", err );
        } else {
          console.log("response: ", res);
          Session.keys = {}; /* clear out the sessions?*/
          Session.set("myResp", res);
        }


        /*
        for (var i = 0; i < dataPies.docs.length; i++){  
          console.log(dataPies.docs[i].dataProvider);
          Session.set("presults", dataPies.docs[i].dataProvider);
        }
        */
        //Session.set("presults", dataPies);
      });
    
  }

});

Template.main.results = function(){

  return Session.get("myResp") || [];

}