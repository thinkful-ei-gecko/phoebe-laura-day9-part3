'use strict';

//function to display results/printing to console
function displayResults(responseJson) {
  console.log(responseJson.message);
  $('.results').empty();
  let img = responseJson.message;
  $('.results').append(`<img src='${img}'>`);
}

//function to GET the images
function fetchDogImage(breedType) {
  fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('That is not a recognized breed type.'));
}

//listener on the submit button 
function clickListener() {
  $('form').submit(event => {
    event.preventDefault();
    let breedType = $('#breed-input').val();
    fetchDogImage(breedType);
  });
}

$(clickListener);