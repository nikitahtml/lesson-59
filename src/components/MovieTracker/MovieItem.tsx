import React, { useState, useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';

interface MovieItemProps {
    movie: { id: number, name: string };
    onEdit: (id: number, newName: string) => void;
    onDelete: (id: number) => void;
}

const MovieItem: React.FC<MovieItemProps> = React.memo(({ movie, onEdit, onDelete }) => {
    const [editValue, setEditValue] = useState(movie.name);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEditValue(e.target.value);
        onEdit(movie.id, e.target.value);
    }, [movie.id, onEdit]);

    return (
        <div className="d-flex align-items-center mb-2">
            <Form.Control
                type="text"
                value={editValue}
                onChange={handleChange}
                className="me-2"
            />
            <Button variant="danger" onClick={() => onDelete(movie.id)}>Delete</Button>
        </div>
    );
});

export default MovieItem;
