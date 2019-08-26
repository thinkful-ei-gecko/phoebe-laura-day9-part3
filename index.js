'use strict';

//function to display results/printing to console
function displayResults(responseJson, breedType) {
  $('.results').empty();
  //console.log(responseJson);

  if(responseJson.status === 'error'){
    $('.error').html(`Sorry. ${responseJson.message}.<br/>
                      Please verify the spelling and try again.<br/>
                      Tip: for "black lab" use "labrador"<br/>
                      ...or for "golden retriever" use "retriever", etc.<br/> `);
  }
  else {
    let img = responseJson.message;
    $('.results').append(`<img src='${img}' alt='picture of ${breedType}'>`);
  }
}

//function to GET the images
function fetchDogImage(breedType) {
  fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, breedType))
    .catch(error => {
      $('.error').html(`Sorry, an error ocurred.<br/>${error} `);
    });
}

//listener on the submit button 
function clickListener() {
  $('form').submit(event => {
    event.preventDefault();
    $('.error').html('');
    let breedType = $('#breed-input').val();
    fetchDogImage(breedType);
    $('#breed-input').val('');

  });
}

$(clickListener);