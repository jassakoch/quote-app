const proxy_url = "https://corsproxy.io/?";
const api_url = "https://zenquotes.io/api/quotes/";
let quotesCache = [];
let currentQuoteIndex = 0;

async function fetchQuotes() {
    try {
        const response = await fetch(proxy_url + api_url);

        // Inspect the raw response text
        const textData = await response.text();
        console.log("Raw Response:", textData);

        // Parse the response as JSON
        const data = JSON.parse(textData);
        quotesCache = data;
        currentQuoteIndex = 0;
        displayQuote();
    } catch (error) {
        console.error("Error fetching quotes:", error);
        document.getElementsByClassName("quote")[0].innerText = "Failed to load quotes.";
    }
}

function displayQuote() {
    if (quotesCache.length > 0) {
        const quote = quotesCache[currentQuoteIndex];
        document.getElementsByClassName("quote")[0].innerText = `"${quote.q}" - ${quote.a}`;
        currentQuoteIndex = (currentQuoteIndex + 1) % quotesCache.length;
    } else {
        document.getElementsByClassName("quote")[0].innerText = "No Quotes available.";
    }
}

fetchQuotes();


