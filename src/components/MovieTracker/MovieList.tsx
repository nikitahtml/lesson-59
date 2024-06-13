import React from 'react';
import MovieItem from './MovieItem';

interface Movie {
    id: number;
    name: string;
}

interface MovieListProps {
    movies: Movie[];
    onEdit: (id: number, newName: string) => void;
    onDelete: (id: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onEdit, onDelete }) => (
    <div>
        {movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} onEdit={onEdit} onDelete={onDelete} />
        ))}
    </div>
);

export default MovieList;
