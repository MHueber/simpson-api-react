import axios from "axios";
import { useState } from "react";
import Quote from "./Quote";


function QuoteList(){
    const [quote, setQuote] = useState("Exemple de citation");

    const getQuote = () => {
        axios
           .get('https://simpsons-quotes-api.herokuapp.com/quotes')
            .then(response => response.data)
            .then((data) => {setQuote(data[0])})
        
        }

    return(
        <section className="quote">
           <Quote quote={quote} />
            <button type="button" onClick={getQuote}>Pick a Quote !</button>
        </section>

    );
}

export default QuoteList;