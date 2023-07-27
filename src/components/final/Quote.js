import React, { useState, useEffect } from 'react';

const Quote=(props)=>{
   
        const [quoteText, setQuoteText] = useState('');
        const [quoteAuthor, setQuoteAuthor] = useState('');
        useEffect(() => {
            if (props.userBirthday===366) {
                const quoteURL = "https://type.fit/api/quotes";
        
                fetch(quoteURL)
                .then((response) => response.json())
                .then((response) => {
                  let quote = response;
                  let randomNumber = Math.floor(Math.random() * quote.length);
                  let randomQuote = quote[randomNumber];
                  console.log(randomQuote);
            
                  // Update the state with the fetched quote text and author
                  setQuoteText(randomQuote.text);
                  setQuoteAuthor(randomQuote.author);
                })
                .catch((error) => {
                  console.error("Error fetching quotes:", error);
                });
            }
          }, []); 
        

return(
<div>
    <h4 >{quoteText}</h4>
    <h5 >{quoteAuthor}</h5>
</div>
)
}


export default Quote 