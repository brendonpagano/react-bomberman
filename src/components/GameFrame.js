// React
import React from 'react';


const gameFrameStyle = {
    position: 'relative',
    width: 250,
    height: 250,
    backgroundColor: 'black',
};


const GameFrame = ({ children }) => (
    <div style={gameFrameStyle}>
        {children}
    </div>
);



export default GameFrame;
