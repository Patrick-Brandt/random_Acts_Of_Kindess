
// Constants for API's Used

const charityNavigatorKey = "3ec0b4533e236b7a527fbf81dd68dd75";
const charityNavigatorId = "1f1b3eac";
var charityNavigatorURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=1f1b3eac&app_key=3ec0b4533e236b7a527fbf81dd68dd75&state=WA&city=Seattle&zip="

var startButton = document.getElementById("search-btn")
var appendList = document.querySelector(".charity")

// Starts Function on Submit

startButton.addEventListener("click", function(){
    fetch(charityNavigatorURL)

    .then(function(response){
        return response.json();
       })
       
     .then(function(data){
        console.log(data);

        //create variables/ object to store data and append
        
        var resultsTag = document.querySelector('.results');
        resultsTag.innerHTML = "";
        
        
        var charityClassification = data[0].irsClassification.nteeClassification;
        var selectedCause = document.getElementById("cause").value;
        console.log(selectedCause);
        var filteredCharities = [];

        // This filters out data classification
        for ( var i = 0; i<data.length; i++) {


            if (selectedCause === data[i].irsClassification.nteeType){
                filteredCharities.push(data[i]);

               
                var charityCity = data[i].mailingAddress.city;
                var cityTag = document.createElement('p');
                var charityName = data[i].charityName;
                var charityNameTag = document.createElement('b')
                var charityAddress = data[i].mailingAddress.streetAddress1;
                var charMailAdd = document.createElement('p')
                var charityWebsite = data[i].charityNavigatorURL;
                var websiteAnchor = document.createElement('a');
                

                console.log(websiteAnchor)


                cityTag.append(charityName, charityAddress, charityCity);
                websiteAnchor.setAttribute('href', charityWebsite);
                websiteAnchor.innerHTML = charityWebsite;
                resultsTag.append(cityTag, charityNameTag, websiteAnchor);


                
            }
        }

        console.log(filteredCharities);

     });

     
})

const googleMapKey = 'AIzaSyCa_GtE78cio4hq8ZlvVZEVYEFQEgdOboQ';
const googleMapID = 'ChIJVTPokywQkFQRmtVEaUZlJRA'
'dld2qnRg3gwdOcrlLEf9eYdsbLtx0KZzyshZF0cwghcerhbZfMTAePFUjzpfsyaI'
var googleMapURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyCa_GtE78cio4hq8ZlvVZEVYEFQEgdOboQ'

     let map;

     function initMap() {
       map = new google.maps.Map(document.getElementById("map"), {
         center: { lat: -122.3321, lng: 47.6062 },
         zoom: 8,
       });
     }