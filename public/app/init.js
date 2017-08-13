// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
var app = {
  controllers:{
    weatherController: new WeatherController(),
    imageController: new ImageController(),
    quoteController: new QuoteController(),
    todoController: new TodoController()
  }
}


$(document).ready(function(){
			function displayTime(){
				var currentTime = new Date();
				var hours= currentTime.getHours();
				var minutes=currentTime.getMinutes();
				var seconds=currentTime.getSeconds();
				var milliseconds=currentTime.getMilliseconds();

				var meridiem="AM";

				if(hours>12){
					hours = hours - 12;
					meridiem ="PM";
				}
				if(hours===0){
					hours = 12;
				}


				if(seconds<10){
					seconds="0" + seconds;
				}

				if(minutes<10){
					minutes="0" + minutes;
				}
				if(hours<10){
					hours="0" + hours;
				}




				var clockDiv= document.getElementById('clock');
				clockDiv.innerText= hours+ ":" + minutes + " " + meridiem;			
							
			}

			setInterval(displayTime,100);	
		

		});	
