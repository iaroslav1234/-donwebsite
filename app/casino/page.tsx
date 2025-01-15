'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import HeaderMenu from '@/components/ui/header-menu';
import Card from './components/Card';

interface CardType {
  id: number;
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const cardIcons = [
  'card-don.svg',
  'card-money.svg',
  'card-fedora.svg',
  'card-gun.svg',
  'card-cigar.svg',
  'card-whiskey.svg',
  'card-dice.svg',
  'card-cards.svg',
];

const CasinoPage = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [firstCard, setFirstCard] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !gameWon) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, gameWon]);

  const initializeGame = () => {
    const shuffledCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setMoves(0);
    setTime(0);
    setIsPlaying(true);
    setFirstCard(null);
    setGameWon(false);
  };

  const handleCardClick = (id: number) => {
    if (isChecking || id === firstCard || cards[id].isMatched) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    if (firstCard === null) {
      setFirstCard(id);
    } else {
      setIsChecking(true);
      setMoves((prev) => prev + 1);

      // Check for match
      setTimeout(() => {
        const newCards = [...cards];
        if (cards[firstCard].icon === cards[id].icon) {
          newCards[firstCard].isMatched = true;
          newCards[id].isMatched = true;
          
          // Check for win
          if (newCards.every((card) => card.isMatched)) {
            setGameWon(true);
            setIsPlaying(false);
          }
        } else {
          newCards[firstCard].isFlipped = false;
          newCards[id].isFlipped = false;
        }
        setCards(newCards);
        setFirstCard(null);
        setIsChecking(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <HeaderMenu />
      
      {/* Hero Banner */}
      <div className="w-full h-64 md:h-96 relative mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <Image 
          src="/casino-banner.jpg" 
          alt="The Don's Casino" 
          fill
          className="object-cover object-center opacity-90 sepia"
          priority
        />
      </div>

      <div className="container mx-auto px-4 pb-8">
        {/* Game Stats */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-serif font-bold mb-4">THE CASINO</h2>
          <div className="flex justify-center gap-4 sm:gap-8 mb-4">
            <div className="bg-amber-800 text-amber-100 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
              <p className="text-sm font-serif">MOVES</p>
              <p className="text-xl sm:text-2xl font-bold">{moves}</p>
            </div>
            <div className="bg-amber-800 text-amber-100 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
              <p className="text-sm font-serif">TIME</p>
              <p className="text-xl sm:text-2xl font-bold">
                {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
              </p>
            </div>
          </div>
          <button
            onClick={initializeGame}
            className="bg-red-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-serif hover:bg-red-700 transition-colors"
          >
            New Game
          </button>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-[90vh] mx-auto">
          {cards.map((card) => (
            <Card
              key={card.id}
              {...card}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>

        {/* Victory Message */}
        {gameWon && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-amber-100 p-8 rounded-lg text-center max-w-md mx-4">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Congratulations!
              </h3>
              <p className="mb-4">
                You completed the game in {moves} moves and{' '}
                {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
              </p>
              <button
                onClick={initializeGame}
                className="bg-red-800 text-white px-6 py-2 rounded-lg font-serif hover:bg-red-700 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CasinoPage;
