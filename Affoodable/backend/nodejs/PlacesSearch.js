const axios = require('axios');
const utf8 = require('utf8');
const express = require('express');
const router = express.Router();
// Retrieve the Google API key from the file on disk
const googleApiKey = require("../../GoogleAPIKey");

// The HTTP request for the Place Search
router.get('/', function(req, res){
    axios.request({
        baseURL: "https://maps.googleapis.com",
        url: "/maps/api/place/findplacefromtext/json" +
        "?key=" + googleApiKey +
        "&inputtype=textquery" +
        "&fields=place_id,geometry/location" +
        /** @TODO Set location bias to the device's current location */
        "&locationbias=circle:2000@42.365703,-71.08057100000001" +
        "&input="+utf8.encode(req.body.query),
        method: "GET"
    })
    // Resolve the response
    .then(function (response) {
        res.json({place_search:response.data});
    })

    function nearbySearch(userSearchResult) {
        var location = userSearchResult.candidates[0].geometry.location;
        // The HTTP request for the Nearby Search
        axios.request({
            baseURL: "https://maps.googleapis.com",
            url: "/maps/api/place/nearbysearch/json" +
            "?key=" + googleApiKey +
            "&type=restaurant" +
            "&inputtype=textquery" +
            // Convert the location from the last query to data that this query can use to find nearby restaurants
            "&location=" + location.lat.toString() + "," + location.lng.toString() +
            "&rankby=distance",
            method: "GET"
        })
        // Resolve the response
        .then(function (response) {
            nearbyRestaurants = response.data;
            var frontendData = {
                "userSearchResult": userSearchResult,
                "nearbyRestaurants": nearbyRestaurants
            };
            console.log(frontendData)
            /** @TODO What do I do with this? */
            return frontendData;
        });
    }
});

module.exports=router
