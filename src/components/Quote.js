import React from 'react';

function QuoteListRow({ quote }){

    return(
        
        <div>
            <img src={quote.image} alt={quote.character}/>
            <p>{quote.character}</p>
            <p><em>{quote.quote}</em></p>
        </div>

    );
}

export default QuoteListRow;