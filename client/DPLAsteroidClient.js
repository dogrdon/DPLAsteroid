Template.main.events({
  'click #button' : function () {
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
      Meteor.call("searchDPLA", function(err,res, qterm){
        console.log(res.content);
        console.log('you searched for ' + qterm)
      });
    
  }
});