var clientID = 'a0ee7d1e23dc4b14ac56e93bb2a390ce';
var redirectURI= 'https://akunz19.github.io/testloginspotify/';
var queryURL= 'https://accounts.spotify.com/authorize?client_id='+clientID+'&response_type=token'+'&redirect_uri='+redirectURI;




  $("button").on("click",  function(){
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response)
      }).catch(function(error){
          console.log(error)
      })
  });