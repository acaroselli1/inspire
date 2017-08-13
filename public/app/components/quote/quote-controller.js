function QuoteController(){

	var quoteService = new QuoteService()

function drawQuote(quote) {
    var quoteElem = document.getElementById('quote')
	template = `
    
      <div class="quote"><p class="quote-text">${quote.quote}<p></div>
     
      `
	
	
	quoteElem.innerHTML += template;

}

quoteService.getQuote(drawQuote);
}
	



/*qs.getQuote(function(quote){
		console.log('What is the quote', quote)
	})
}*/
