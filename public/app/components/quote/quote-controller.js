function QuoteController(){

	var quoteService = new QuoteService()

function drawQuote(quote) {
	var quoteElem = document.getElementById('quote')
	//var quoteAuthor= document.getElementById('author')
	template = `
    
      <div class="quote"><p class="quote-text">${quote.quote}<p>
      <div class="author"><p class="author-text">  -  ${quote.author}<p></div><div>
      `
	
	
	quoteElem.innerHTML += template;
   // quoteAuthor.innerHTML += template;
}

quoteService.getQuote(drawQuote);
}
	



/*qs.getQuote(function(quote){
		console.log('What is the quote', quote)
	})
}*/
