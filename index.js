function getDogImage(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        .then(response => response.json())
        .then(responseJson => 
            checkResponse(responseJson))
        .catch(error => alert("Something went wrong. Try again later."));
}

function displayImage(responseJson) {
    $('.results').html(`<img src="${responseJson.message}">`);
}

function handleBreedNotFound() {
    $('.results').html("");
    alert("Sorry, that breed was not found. Please try a different one.");
}

function checkResponse(responseJson) {
    if (responseJson.message === "Breed not found (master breed does not exist)") {
        console.log("breed not found");
        handleBreedNotFound();
    } else {
        consoleLogImage(responseJson);
        displayImage(responseJson);
    };
}

function consoleLogImage(responseJson) {
    console.log(responseJson.message);
}

function watchForm() {
    $("form").submit (event => {
        event.preventDefault();
        dogBreed = $('#breeds').val().toLowerCase();
        console.log(`${dogBreed} was chosen`);
        getDogImage(dogBreed);
    });
}

$(function() {
    console.log("App loaded, waiting for user to submit form");
    watchForm();
})