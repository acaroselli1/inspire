function WeatherController(){
	//var wc = this;
	var weatherService = new WeatherService();
		console.log(weather);
	
	weatherService.getWeather(function(weather){

	})
	
		/*weatherService.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
	})*/

function drawWeather(obj) {
    var weatherElem = document.getElementById('weather')
	template = `
    <div class="weather">
	  <p>${obj.main.temp} degrees</p>
	  <p>Boise</p>
    </div> 
      `
	console.log(obj)	

	weatherElem.innerHTML += template;

}

weatherService.getWeather(drawWeather);
}