// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Dec 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-JS/sw.js", {
    scope: "/ICS2O-Unit6-03-JS/",
  })
}


/**
 * Get API info.
*/
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
    '<img src="' + 
      jsonData.weather_icon + 
      '" alt="API image" class="center" ' +
      '>'
    if (jsonData.weather != "none") {
      document.getElementById("temperature").innerHTML =
      "<p>temperature: " + '<a href="' + jsonData.weather_description + '">' + jsonData.weather_description  + "</a>"
  } else {
    document.getElementById("temperature").innerHTML = "<p>Temperature: unknown</p>"
  }
  } catch (err) {
    console.log(err)
  }
}

getImage("https://api.openweathermap.org")