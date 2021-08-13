const quote_text=document.getElementById("quote_text");
const author_name=document.getElementById("author_name");


const getQuote = async () =>
{

    var url_website="https://type.fit/api/quotes";    

    const response=await fetch(url_website);
    console.log(typeof response);
    //convert to json and store 
    const allQuotes = await response.json();

    const index = Math.floor(Math.random()*allQuotes.length);

    const quotes=allQuotes[index].text;

    const auth=allQuotes[index].author;

    if(auth==null)
    {
        author_name = "Anonymous";
    }

    //display the quote and the author name
    quote_text.innerHTML=quotes;
    author_name.innerHTML="-- "+auth;
}
getQuote();