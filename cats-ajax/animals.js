const DOG_URL= "https://dog.ceo/api/breeds/image/random";
const CAT_URL = "https://api.thecatapi.com/v1/images/search";

const animals = document.querySelector(".animals");


function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    addNewDoggo();
  } else {
     text.style.display = "none";
  }
}








function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      animals.appendChild(img);
    });
}

