'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import HeaderMenu from '@/components/ui/header-menu';
import { Star, Shield, Crown, Award, Trophy, Target } from 'lucide-react';

const FamilyPage = () => {
  const [selectedRank, setSelectedRank] = useState<number | null>(null);

  const ranks = [
    {
      title: "Street Runner",
      icon: <Shield className="w-8 h-8" />,
      requirements: "10,000 - 100,000 $DON",
      value: "$0.17 - $1.7",
      description: "Every family starts somewhere. Street Runners are the up-and-comers, the hustlers, the ones who see the vision early. You might be small time now, but hey - even The Don started as a Street Runner.",
      color: "bg-gray-800"
    },
    {
      title: "Associate",
      icon: <Target className="w-8 h-8" />,
      requirements: "100,000 - 1,000,000 $DON",
      value: "$1.7 - $17",
      description: "Now we're talking. Associates have proven their loyalty to the family. Not yet made men, but respected enough to get a seat at the social club. The kind of holder who understands that in ICP we trust.",
      color: "bg-blue-800"
    },
    {
      title: "Soldier",
      icon: <Award className="w-8 h-8" />,
      requirements: "1M - 10M $DON",
      value: "$17 - $170",
      description: "A made member of the family. Soldiers are the backbone of our operation. When The Don needs something done on the blockchain, these are the guys who make it happen. True believers in the Internet Computer revolution.",
      color: "bg-green-800"
    },
    {
      title: "Capo",
      icon: <Star className="w-8 h-8" />,
      requirements: "10M - 50M $DON",
      value: "$170 - $850",
      description: "Capos are the heavy hitters. The kind of holders who don't just follow The Don's vision - they help shape it. When a Capo talks Internet Computer, even Bitcoin maxis listen... not that they'd admit it.",
      color: "bg-purple-800"
    },
    {
      title: "Underboss",
      icon: <Trophy className="w-8 h-8" />,
      requirements: "50M - 100M $DON",
      value: "$850 - $1,700",
      description: "The elite of our family. These are the types who don't just hold bags - they hold influence. When an Underboss makes a move in the ICP ecosystem, the whole blockchain feels it. Second only to The Don himself.",
      color: "bg-red-800"
    },
    {
      title: "The Don",
      icon: <Crown className="w-8 h-8" />,
      requirements: "100M+ $DON",
      value: "$1,700+",
      description: "The highest honor in our family. These legends hold bags so heavy, they make Bitcoin whales look like guppies. When they speak about Internet Computer, it's not just talk - it's gospel. The true believers, the visionaries, the ones who saw what ICP could become.",
      color: "bg-amber-800"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <HeaderMenu />
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif font-bold mb-2">FAMILY RANKS</h2>
            <p className="text-lg font-serif">From the streets to the suites - every holder has their place</p>
            <p className="text-md font-serif mt-2 text-gray-600">Current token price: $0.000017</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ranks.map((rank, index) => (
              <Card 
                key={index}
                className={`bg-white border-2 border-black p-4 cursor-pointer transition-all ${
                  selectedRank === index ? 'ring-2 ring-red-800' : ''
                }`}
                onClick={() => setSelectedRank(index)}
              >
                <div className={`${rank.color} text-white p-4 flex items-center justify-between`}>
                  <h3 className="text-xl font-serif font-bold">{rank.title}</h3>
                  {rank.icon}
                </div>
                
                <div className="p-4 bg-white space-y-4">
                  <div>
                    <h4 className="font-serif font-bold mb-2">Required Holdings:</h4>
                    <p className="font-serif">{rank.requirements}</p>
                    <p className="font-serif text-sm text-gray-600">Value: {rank.value}</p>
                  </div>

                  <div>
                    <h4 className="font-serif font-bold mb-2">The Story:</h4>
                    <p className="font-serif text-sm">{rank.description}</p>
                  </div>
                  
                  <div className="bg-black text-white p-4 mt-4 font-serif">
                    <p className="text-sm italic mb-2">&ldquo;The Family&apos;s business plans are kept close to the chest...&rdquo;</p>
                    <p className="text-xs">Benefits for made members coming soon</p>
                  </div>

                  {selectedRank === index && (
                    <div className="mt-4 pt-4 border-t-2 border-black">
                      <div className="bg-amber-100 p-4 rounded">
                        <h4 className="font-serif font-bold mb-2">Your Holdings:</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-red-800 h-2 rounded-full" 
                            style={{width: '60%'}}
                          ></div>
                        </div>
                        <p className="text-sm font-serif mt-2">
                          Progress to next rank: 60%
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPage;
