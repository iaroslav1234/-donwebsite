'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const Card = ({ icon, isFlipped, isMatched, onClick }: CardProps) => {
  return (
    <div
      className={`relative w-full aspect-[3/4] cursor-pointer ${
        isMatched ? 'pointer-events-none' : ''
      }`}
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {/* Card Back */}
        <div
          className={`absolute w-full h-full backface-hidden bg-amber-800 border-2 sm:border-4 border-amber-900 rounded-lg shadow-xl
            ${isFlipped ? 'hidden' : 'block'}`}
        >
          <div className="absolute inset-1 sm:inset-2 border border-amber-700 rounded-lg bg-[url('/card-pattern.svg')] opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-4xl font-serif text-amber-200 opacity-80">$</span>
          </div>
        </div>

        {/* Card Front */}
        <div
          className={`absolute w-full h-full backface-hidden bg-amber-100 border-2 sm:border-4 border-amber-900 rounded-lg shadow-xl rotate-y-180
            ${isFlipped ? 'block' : 'hidden'}`}
        >
          <div className="absolute inset-1 sm:inset-2 border border-amber-200 rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
            <div className="relative w-3/4 h-3/4">
              <Image
                src={`/${icon.replace('.png', '.svg')}`}
                alt="Card Icon"
                fill
                className="object-contain sepia"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
