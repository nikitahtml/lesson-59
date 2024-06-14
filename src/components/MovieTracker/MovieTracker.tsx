import React, { useState, useEffect, useCallback } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import MovieList from './MovieList';

interface Movie {
    id: number;
    name: string;
}

const MovieTracker: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>(() => {
        const savedMovies = localStorage.getItem('movies');
        return savedMovies ? JSON.parse(savedMovies) : [];
    });
    const [newMovie, setNewMovie] = useState('');

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    const addMovie = () => {
        if (newMovie.trim()) {
            setMovies([...movies, { id: Math.random(), name: newMovie }]);
            setNewMovie('');
        }
    };

    const editMovie = useCallback((id: number, newName: string) => {
        setMovies(movies.map(movie => (movie.id === id ? { ...movie, name: newName } : movie)));
    }, [movies]);

    const deleteMovie = useCallback((id: number) => {
        setMovies(movies.filter(movie => movie.id !== id));
    }, [movies]);

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <Form.Control
                        type="text"
                        value={newMovie}
                        onChange={(e) => setNewMovie(e.target.value)}
                        placeholder="Enter movie name"
                        className="me-2"
                    />
                </Col>
                <Col>
                    <Button variant="primary" onClick={addMovie}>Add</Button>
                </Col>
            </Row>
            <MovieList movies={movies} onEdit={editMovie} onDelete={deleteMovie} />
        </Container>
    );
};

export default MovieTracker;
