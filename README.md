# TrendWave

A modern, responsive React-based news aggregator application designed to deliver top headlines across multiple categories. Built with Create React App, it leverages the NewsAPI to fetch real-time news data, providing users with an intuitive interface to browse news by topics such as General, Business, Entertainment, Health, Science, Sports, and Technology. The app emphasizes user experience with features like infinite scrolling and progress indicators.

## Features

- Browse news by categories: General, Business, Entertainment, Health, Science, Sports, Technology
- Infinite scrolling for seamless news loading
- Loading bar to indicate progress
- Responsive design using Bootstrap
- Displays news source, author, date, and description
- Dynamic document title updates based on category
- Filtering to avoid duplicate articles

## Architecture

- **Frontend Framework**: React 19, utilizing functional components and hooks (useState, useEffect, useCallback) for state management.
- **Routing**: React Router DOM handles client-side navigation between different news categories.
- **Styling**: Bootstrap for responsive grid layout and component styling, with custom CSS for additional aesthetics.
- **Data Fetching**: Asynchronous API calls to NewsAPI, with error handling and data filtering to prevent duplicates.
- **Infinite Scrolling**: Implemented using react-infinite-scroll-component for seamless loading of additional articles.
- **Progress Indication**: react-top-loading-bar provides visual feedback during data loading.

## Key Components

1. **App.js**: Main application component managing routing and global state (progress bar). It renders the Navbar and routes to News components for each category.
2. **Navbar.js**: Navigation bar allowing users to switch between news categories.
3. **News.js**: Core component handling data fetching, state management, and rendering of news articles. It includes pagination logic with infinite scroll, category-specific badge styling, and dynamic document title updates.
4. **Newsitem.js**: Individual article card component displaying title, description, image, source, author, date, and a link to the full article.
5. **Spinner.js**: Loading indicator component used during initial load and infinite scroll.

## API Integration

- **NewsAPI**: Fetches top headlines using endpoints like `https://newsapi.org/v2/top-headlines?country=us&category={category}&apiKey={key}&page={page}&pageSize={size}`.
- **Data Structure**: Articles include source, author, title, description, URL, image URL, and publication date.
- **Sample Data**: The `sampleOutput.json` file contains example API responses (e.g., cricket-related news).
- **Limitations**: API key is stored in environment variables for security. Free tier limits requests.

## Technologies Used

- React 19
- React DOM
- React Router DOM (v7.1.3) for routing
- React Infinite Scroll Component (v6.1.0)
- React Top Loading Bar (v3.0.2)
- NewsAPI for news data
- Bootstrap for styling
- Create React App with react-scripts (v5.0.1)
- Cross-env for environment handling
- Web Vitals for performance monitoring

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd newsapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get a free API key from [NewsAPI](https://newsapi.org/).

4. Replace the API key in `src/components/News.js` (around line 20) with your own key.

5. Start the development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Navigate to different categories using the navbar.
- Scroll down to load more news articles.
- Click on "Go somewhere" to read the full article on the source website.

## API Key

The app uses an API key stored in a `.env` file for security. Obtain your own key from [NewsAPI](https://newsapi.org/) and add it to the `.env` file as `REACT_APP_NEWS_API_KEY=your_api_key_here`.

## Potential Improvements

- **Security**: API key is now stored in environment variables (.env file).
- **Caching**: Implement local storage or service worker for offline access.
- **Search Functionality**: Add search bar for keyword-based news queries.
- **User Preferences**: Allow users to select countries or customize categories.
- **Error Boundaries**: Add React error boundaries for better error handling.
- **Accessibility**: Improve ARIA labels and keyboard navigation.
- **Performance**: Implement lazy loading for images and code splitting.
- **Testing**: Expand test coverage for components and API interactions.
- **Deployment**: Configure for hosting platforms like Vercel or Netlify.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
