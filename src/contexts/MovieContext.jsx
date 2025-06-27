import { createContext, useContext, useState, useEffect } from 'react'

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    // check if there are favorites stored already and add them to state
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");

        if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
    }, []);

    // update favorites any time they are changed
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // add a movie to favorites
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    };

    // remove a movie from favorites
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    };

    // find out if a movie is one of the favorites
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };

    // define the values that the provider makes available to children
    const values = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}