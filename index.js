//API Key for weather website. Needed to extracting data. 
const apiKey =""; 

//variables
const searchButton = document.querySelector('#searchButton');
const inputCity = document.querySelector('#inputCity');
const weatherContainer = document.querySelector('#weatherContainer')


// Adds an eventListener that will run when the search/submit button is 'clicked'.
searchButton.addEventListener('click', async () => {
   
    // Test that allows you to see that the input field and button are working. 
    //console.log(inputCity.value)

    //gets user input and saves it into a variable called cardHTML
    const cardHtml = createCardHtml(inputCity.value);

    // starts a request. Saves it into a variable. Also puts the user input and API key inside the URL
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apiKey}&units=metric`)
    //console.log(response); 

    //converts the response into JSON format and saves it into a variable called data
    const data = await response.json(); 
    //console.log(data.main.temp); 

    //grabs weather values from JSON and stores them in variables.
    const city = data.name;
    const temp = data.main.temp; 
    const feelsLike = data.main.feels_like; 
    const description = data.weather[0].description;
    const icons = data.weather[0].icon;

    //console.log(city, temp, feelsLike, description)

    finishedHtml = createCardHtml(city, temp, feelsLike, description, icons)

    //renders/creates the template card inside the card container using the values from finishedHtml (above)  
    weatherContainer.innerHTML = finishedHtml;


});


const createCardHtml = (city, temp, feelsLike, description, icons) => `
    
<div class="card">
<div class="card-body" >
<h5 class="card-title">${city}</h5>
<h6 class="card-subtitle mb-2 text-muted">${description}</h6>
<img src=http://openweathermap.org/img/wn/${icons}@2x.png>
<p class="card-text">Current temperature is ${temp} Degrees Celcius</p>
<p class="card-text">feels like: ${feelsLike}</p>
</div>
</div>

`;




