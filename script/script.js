// Constants for Charity Navigator API Used

const charityNavigatorKey = "3ec0b4533e236b7a527fbf81dd68dd75";
const charityNavigatorId = "1f1b3eac";
var charityNavigatorURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=1f1b3eac&app_key=3ec0b4533e236b7a527fbf81dd68dd75&state=WA&city=Seattle&zip="
//Html elements
var startButton = document.getElementById("search-btn")
var appendList = document.querySelector(".charity")
var zipCode = document.querySelector(".zipCode")
var localStorageList = document.querySelector(".localStorage")
//array for local storage
var storedZip = [];

// Starts Function on Submit

startButton.addEventListener("click", function(){
    fetch("https://api.data.charitynavigator.org/v2/Organizations?app_id=1f1b3eac&app_key=3ec0b4533e236b7a527fbf81dd68dd75&state=WA&city=Seattle&zip=" + zipCode.value)

    .then(function(response){
        return response.json();
    })
       
     .then(function(data){
        console.log(data);
        //create variables/ object to store data and append
        var resultsTag = document.querySelector('.results');
        resultsTag.innerHTML = "";
        var charityClassification = data[0].  irsClassificationnteeClassification;
        var selectedCause = document.getElementById("cause").value;
        console.log(selectedCause);
        var filteredCharities = [];

        // This filters out data classification
        for ( var i = 0; i <data.length; i++) {
          if (selectedCause === data[i].irsClassification.nteeType){
            filteredCharities.push(data[i]);

            var charityCity = data[i].mailingAddress.city;
            var charityName = data[i].charityName;
            var charityAddress = data[i].mailingAddress.streetAddress1;
            var charityWebsite = data[i].charityNavigatorURL;

            var charityCityTag = document.createElement('p');
            var cityTag = document.createElement('p');
            var charityAddressTag = document.createElement('p');

            var charityAddress = data[i].mailingAddress.streetAddress1;
            var charMailAdd = document.createElement('p')
            var charityZipCode = data[i].mailingAddress.postalCode;
            var charityZipCodeTag = document.createElement('p')
            var charityWebsite = data[i].charityNavigatorURL;

            var websiteAnchor = document.createElement('a');
              
            console.log(websiteAnchor)

            cityTag.append(charityName);
            charityAddressTag.append(charityAddress);
            charityCityTag.append(charityCity)
            charityZipCodeTag.append(charityZipCode)
            websiteAnchor.setAttribute('href', charityWebsite);
            websiteAnchor.innerHTML = charityWebsite;

            resultsTag.append(cityTag, charityAddressTag, charityCityTag, charityZipCodeTag, websiteAnchor);

          }
        }
        console.log(filteredCharities);
        //on click push the zipcode to array for local storage
        storedZip.push(zipCode.value)
        localStorage.setItem("zipCodes", JSON.stringify(storedZip))
     });
});

//Why will map not display and how do i get generated results to be pins on the map?

const googleMapKey = 'AIzaSyBNRfgI2l7u-g8OLKgIL4ueoq_XDs9b-Ew';

     let map;

     function initMap() {

         console.log('test')
       map = new google.maps.Map(document.getElementById("map"), {
         center: { lat: 47.6062095, lng: -122.3320708 },
         zoom: 8,
       });
     }


      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 47.6062095, lng: -122.3320708 },
      });
      const geocoder = new google.maps.Geocoder();
      document.getElementById("submit").addEventListener("click", () => {
        geocodeAddress(geocoder, map);
      });
    }
    
    function geocodeAddress(geocoder, resultsMap) {
      const address = document.getElementById("address").value;
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          resultsMap.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location,
          });
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
function initLocalStorage(){
  var localStorageZips = JSON.parse(localStorage.getItem("zipCodes"));
  console.log(localStorageZips, "local storage")
  if (localStorageZips !== null){
    
    for(i = 0; i < localStorageZips.length; i++) {
      var zip = localStorageZips[i];
      var newLi = document.createElement("li");
      newLi.textContent = zip;
      localStorageList.append(newLi)
    }
  }
  else return;
};

initLocalStorage();

