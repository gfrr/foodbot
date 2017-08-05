var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/tv/popular', function(req, res) {

  console.log(req.body.type);
  var url = "https://api.themoviedb.org/3/tv/popular?api_key=c17dc56917718bc1241dc886a5353912&language=en-US&page=1"
//sending the search query to the google api and returning the results
  request(url, (err, resp, body)=> {
    body = JSON.parse(body);

    if (err) res.status(401).json({message: "error"});
    else res.status(200).json(body);
  });
});

router.get('/tv/details/:id', function(req, res) {
  var url = `https://api.themoviedb.org/3/tv/1399?api_key=c17dc56917718bc1241dc886a5353912&language=en-US`;
  request(url, (err, resp, body)=> {
    body = JSON.parse(body);

    if (err) res.status(401).json({message: "error"});
    else res.status(200).json(body);
  });

})


router.get('/tv/cast/:id', function(req, res) {

  var url = `https://api.themoviedb.org/3/tv/1399/credits?api_key=c17dc56917718bc1241dc886a5353912&language=en-US`;

 //sending the search query to the google api and returning the results
  request(url, (err, resp, body)=> {
    body = JSON.parse(body);

    if (err) res.status(401).json({message: "error"});
    else res.status(200).json(body);
  });
});



router.get('/actor/:name', function(req, res) {

  var url = `https://api.themoviedb.org/3/search/person?api_key=c17dc56917718bc1241dc886a5353912&language=en-US&query=${req.params.name}&page=1&include_adult=false`;
  console.log(url);
  request(url, (err, resp, body)=> {
    body = JSON.parse(body);

    if (err) res.status(401).json({message: "error"});
    else res.status(200).json(body);
  });

})

module.exports = router;


//drinks || eating || dance || museums
