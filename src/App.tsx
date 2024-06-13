import React from 'react';
import MovieTracker from './components/MovieTracker/MovieTracker';

const App: React.FC = () => (
    <div className="App">
        <h1 className="text-center my-4">Movie Tracker</h1>
        <MovieTracker />
    </div>
);

export default App;
