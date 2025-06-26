import '../css/Home.css'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1990"},
        {id: 3, title: "The Matrix", release_date: "1999"}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search for movies..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home