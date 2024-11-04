// MemoryGame.tsx
import React, { useState } from 'react';
import Card from './Card';

type CardData = {
    id: number;
    value: string;
    isFlipped: boolean;
};

const MemoryGame: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>([
        { id: 1, value: "🍎", isFlipped: false },
        { id: 2, value: "🍌", isFlipped: false },
        { id: 3, value: "🍇", isFlipped: false },
        { id: 4, value: "🍎", isFlipped: false },
        { id: 5, value: "🍌", isFlipped: false },
        { id: 6, value: "🍇", isFlipped: false },
    ]);

    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        if (flippedCard === index || cards[index].isFlipped) return;

        const newCards = [...cards];
        newCards[index].isFlipped = true;

        if (flippedCard === null) {
            setFlippedCard(index);
        } else {
            if (newCards[flippedCard].value === newCards[index].value) {
                setFlippedCard(null);
            } else {
                setTimeout(() => {
                    newCards[flippedCard].isFlipped = false;
                    newCards[index].isFlipped = false;
                    setCards(newCards);
                    setFlippedCard(null);
                }, 1000);
            }
        }

        setCards(newCards);
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '220px' }}>
            {cards.map((card, index) => (
                <Card
                    key={card.id}
                    id={card.id}
                    value={card.value}
                    isFlipped={card.isFlipped}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
};

export default MemoryGame;
