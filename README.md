
# 🎬 Movie Database

A simple and interactive React-based web application that lets users search for movies, view detailed information, and manage a list of their favorite movies.

## 🚀 Features

- 🔍 Search for movies using the OMDb API
- 📄 View details including title, poster, year, and plot
- ⭐ Add or remove movies from your favorites list
- 💾 Favorites persist locally using localStorage
- ⚡ Fast and responsive UI built with React

## 🛠️ Tech Stack

- **React** – Frontend library
- **JavaScript (ES6+)**
- **OMDb API** – Movie data provider
- **CSS** – Styling
- **localStorage** – Data persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JAl-Hassani/movie-database.git
   cd movie-database
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app locally**
   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## 🔑 API Key Setup

This project uses the [OMDb API](http://www.omdbapi.com/). To fetch movie data, you’ll need an API key:

1. Register at [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Add your API key to the appropriate file (e.g. `api.js` or `.env`):
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

## 📁 Project Structure

```
movie-database/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.js
│   ├── api.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```
