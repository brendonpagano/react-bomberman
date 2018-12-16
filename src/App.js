// React
import React from 'react';

// Custom Components
import GameFrame from './components/GameFrame';
import Player from './components/Player';


const App = () => {
    return (
        <GameFrame>
            <Player />
        </GameFrame>
    );
};



export default App;
