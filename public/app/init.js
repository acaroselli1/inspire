// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
var app = {
	controllers: {
		weatherController: new WeatherController(),
		imageController: new ImageController(),
		quoteController: new QuoteController(),
		todoController: new TodoController()
	}
}



function displayTimeStandard() {
	  
	    var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var meridiem = "AM";
 
		if (hours > 12) {
			hours = hours - 12;
			meridiem = "PM";
		}
		if (hours === 0) {
			hours = 12;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (hours < 10) {
			hours = " " + hours;
		}

		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + " " + meridiem;
	
		if ((hours < 12) && (meridiem == "AM")){ 
			var greeting = document.getElementById("greeting");
			greeting.innerText = "Good Morning!"
	     } else if ((hours >=5) && (meridiem =="PM")){
			var greeting = document.getElementById("greeting");
			greeting.innerText ="Good Evening!"

		 } else {var greeting = document.getElementById("greeting");
			 greeting.innerText = "Good Afternoon!";
		 }
/*function displayTimeMilitary(){
	 clearInterval(displayTimeStandard)
	 var currentTime = new Date();
	 var hours = currentTime.getHours();
	 var minutes = currentTime.getMinutes();
	 var meridiem = "AM";
 

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}

	var clockDiv = document.getElementById('clock');
	clockDiv.innerText = hours + ":" + minutes
	
	}
  
   var clicks = 1

 function initiator (){
	 click++;
	if (click)
 }*/
}
 setInterval(displayTimeStandard,1000)
	
		
			
	     























