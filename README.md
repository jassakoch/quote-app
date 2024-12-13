# Quote Fetcher App

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS](https://img.shields.io/badge/CSS-3-blue)

## About the App
This is a JavaScript app that fetches motivational quotes from the [ZenQuotes API](https://zenquotes.io/) and displays one quote at a time. The app uses a **proxy server** to handle CORS issues with the API.

### Features:
- **Fetch Quotes**: The app fetches quotes using the ZenQuotes API and caches them locally for seamless user experience.
- **Refresh Quotes**: Users can click a button to display a new quote from the local cache.
- **Dynamic Background**: The app includes a gradient background that changes dynamically when a new quote is displayed. 

### Screenshot:
![Quote App](/src/Screen%20Shot%202024-12-13%20at%2014.44.42.png)


### Background Animation
The background animation is inspired by a CodePen project by [Manuel Pinto](https://codepen.io/P1N2O/pen/pyBNzX), titled *Pure CSS Gradient Background Animation*. 

### How It Works
1. **API Integration**: The app fetches quotes from the ZenQuotes API using JavaScript's `fetch` method.
2. **Proxy Server**: A proxy server is used to handle CORS restrictions when making API calls.
3. **Quote Display**: When the app loads, it fetches quotes and displays the first quote.
4. **Refresh Button**: A button allows users to cycle through the quotes stored in the local cache.
5. **Gradient Animation**: The background gradient shifts dynamically to create a visually appealing experience.

### Usage
When you visit the site:
1. A motivational quote is displayed by default.
2. Clicking the **Refresh Quote** button fetches and displays a new quote from the cache.
3. The gradient background changes dynamically with each quote refresh.

### Credits
- Quotes API: [ZenQuotes](https://zenquotes.io/)
- Background Animation: [Manuel Pinto's CodePen](https://codepen.io/P1N2O/pen/pyBNzX)

