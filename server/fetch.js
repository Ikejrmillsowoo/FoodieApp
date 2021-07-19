var express = require("express");
var router = express.Router();

("use strict");

// const cors = "https://cors-anywhere.herokuapp.com/";
// const YelpURL = "https://api.yelp.com/v3/businesses/search";
const term = "food";
const location = 19701;

const yelp = require("yelp-fusion");

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey =
  "bHX6C8A1IIHi8Z6GirSyCf7zaCWoh3XGc-jjnFBR2zrtVh9G_avvtG35eDnmzOWsvf1CABoDc_6ZrfFms8tYaKdmbqQLq0y8InXUPMFO1PncN8XBaKNiB178BD9lYHYx";

const searchRequest = {
  term,
  location,
};

// router.get("/", (req, res, next) => {
//   api_helper
//     .make_API_call(`${cors}${YelpURL}?term=${term}&location=${location}`)
//     .then((response) => {
//       console.log(response);
//       res.json(response);
//     })
//     .catch((error) => {
//       res.send(error);
//     });
// });

router.get("/", (req, res, next) => {
  const client = yelp.client(apiKey);
  client
    .search(searchRequest)
    .then((response) => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
      res.send(prettyJson);
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    });
});

module.exports = router;
