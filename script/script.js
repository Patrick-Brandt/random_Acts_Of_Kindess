
const charityNavigatorKey = "3ec0b4533e236b7a527fbf81dd68dd75";
const charityNavigatorId = "1f1b3eac";
const googleMapKey = 'AIzaSyCa_GtE78cio4hq8ZlvVZEVYEFQEgdOboQ';
const googleMapID = 'ChIJVTPokywQkFQRmtVEaUZlJRA'
var charityNavigatorURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=1f1b3eac&app_key=3ec0b4533e236b7a527fbf81dd68dd75&state=WA&city=Seattle&zip=98105"
var googleMapURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyCa_GtE78cio4hq8ZlvVZEVYEFQEgdOboQ'
var startButton = document.getElementById("search-btn")
var appendList = document.querySelector(".charity")

startButton.addEventListener("click", function(){
    fetch(charityNavigatorURL)

    .then(function(response){
        return response.json();
       })

     .then(function(data){
        console.log(data);

        //create variables/ object to store data and append
        var charityName = data[0].charityName;
        var charityAddress = data[0].mailingAddress.streetAddress1;
        var charityCity = data[0].mailingAddress.city;
        var charityClassification = data[0].irsClassification.nteeClassification;
        var selectedCause = document.getElementById("cause").value;
        console.log(selectedCause)
        var filteredCharities = []


        for ( var i = 0; i<data.length; i++) {

            if (selectedCause === data[i].irsClassification.nteeType){
                filteredCharities.push(data[i])
            }
        }

        console.log(filteredCharities)

        var newListElm = document.createElement("li");

            newListElm.innerHTML = "<p>Charity Name: " + charityName + "</p><br> <p>Charity Address" + charityAddress  + "</p>"
            
            appendList.appendChild(newListElm)
     })

     
})