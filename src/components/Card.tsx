// Card.tsx
import React from 'react';

type CardProps = {
    id: number;
    value: string;
    isFlipped: boolean;
    onClick: () => void;
};

const Card: React.FC<CardProps> = ({ id, value, isFlipped, onClick }) => {
    return (
        <div
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onClick={onClick}
            style={{ width: '100px', height: '100px', margin: '5px', cursor: 'pointer', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', border: '1px solid #000', borderRadius: '5px'}}
        >
            {isFlipped ? value : "?"}
        </div>
    );
};

export default Card;
