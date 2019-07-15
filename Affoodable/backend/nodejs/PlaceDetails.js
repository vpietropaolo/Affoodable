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
        "&type=restaurant" + 
        // This sets the location bias to 75 Binney St office
        "&locationbias=circle:2000@42.365703,-71.08057100000001" +
        "&input="+utf8.encode(req.body.query),
        method: "GET"
    })
    // Resolve the response
    .then(function (response) {
        return response.data.candidates[0].place_id;
    })
    // Resolve the placeId
    .then(function (placeId) {
        // The HTTP request for the Place Details
        axios.request({
            baseURL: "https://maps.googleapis.com",
            url: "/maps/api/place/details/json" +
            "?key=" + googleApiKey +
            "&placeid=" + placeId,
            method: "GET"
        })
        // Resolve the response
        .then(function (response) {
            console.log(response.data)
            /** @TODO What do I do with this? */
            res.json({place_details:response.data})
        });
    });
});

module.exports = router
