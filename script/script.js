const charityNavigatorKey = "3ec0b4533e236b7a527fbf81dd68dd75";
const charityNavigatorId = "1f1b3eac";

var charityNavigatorURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=1f1b3eac&app_key=3ec0b4533e236b7a527fbf81dd68dd75&state=WA&city=Seattle&zip=98105"

var startButton = document.querySelector(".btn")

startButton.addEventListener("click", function(){
    fetch(charityNavigatorURL)

    .then(function(response){
        return response.json();            
       })

     .then(function(data){
        console.log(data);
     })

 
})

