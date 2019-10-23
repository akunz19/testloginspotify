var clientID = 'a0ee7d1e23dc4b14ac56e93bb2a390ce';
var redirectURI= '';
var queryURL= 'https://accounts.spotify.com/authorize?'+clientID+'&response_type=code';


$.ajax({
    url: queryURL,
    method: "GET"
  })