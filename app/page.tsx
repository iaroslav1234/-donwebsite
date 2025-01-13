'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import HeaderMenu from '@/components/ui/header-menu';
import { Twitter, Share2, Trophy, Camera, MessageCircle } from 'lucide-react';

const DonMemeSite = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  
  const dailyTasks = [
    {
      id: 1,
      title: "Twitter Takedown",
      description: "Post a $DON meme and tag The Don",
      reward: "100 Respect Points",
      difficulty: "Easy",
      type: "Social",
      icon: <Twitter className="w-6 h-6" />,
      completions: 45
    },
    {
      id: 2,
      title: "Meme Master",
      description: "Create an ICP mafia movie poster featuring The Don",
      reward: "250 Respect Points",
      difficulty: "Medium",
      type: "Creative",
      icon: <Camera className="w-6 h-6" />,
      completions: 12
    },
    {
      id: 3,
      title: "Family Business",
      description: "Write a mob-style thread about ICP's technology",
      reward: "150 Respect Points",
      difficulty: "Medium",
      type: "Content",
      icon: <MessageCircle className="w-6 h-6" />,
      completions: 28
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header Menu */}
      <HeaderMenu />
      
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="text-sm mb-2 font-serif italic">"In Internet Computer we trust"</div>
          <h1 className="text-6xl font-serif font-bold mb-2">$DON</h1>
          <div className="text-lg font-serif">THE DON OF ICP's OWN MEME TOKEN</div>
        </div>
      </header>

      {/* Breaking News Banner */}
      <div className="bg-red-800 text-white py-2">
        <div className="container mx-auto px-4 text-center font-serif animate-pulse">
          🚨 BREAKING: LOCAL GENIUS SPOTTED MAKING INTERNET COMPUTER AN OFFER IT COULDN'T REFUSE 🚨
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <Card className="mb-8 bg-amber-100 border-2 border-black p-6">
          <div className="text-center mb-6">
            <span className="bg-black text-white px-4 py-1 font-serif">THE STORY</span>
          </div>
          
          <div className="space-y-6 font-serif text-center max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed italic">
              "Every blockchain needs its Don. Bitcoin had Satoshi, Ethereum had Vitalik, and ICP? 
              ICP has Dominic 'The Don' Williams." 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold">0% Tax</p>
                <p className="text-sm">Just like The Don's blockchain fees</p>
              </div>
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold">No Admin Keys</p>
                <p className="text-sm">True decentralization, capiche?</p>
              </div>
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold">100% Memes</p>
                <p className="text-sm">That's how mafia works</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-amber-100 border-2 border-black p-6 text-center font-serif">
            <h3 className="text-xl font-bold mb-2">MARKET CAP</h3>
            <p className="text-3xl font-bold">$0</p>
            <p className="text-sm italic">...for now 👀</p>
          </Card>
          
          <Card className="bg-amber-100 border-2 border-black p-6 text-center font-serif">
            <h3 className="text-xl font-bold mb-2">HOLDERS</h3>
            <p className="text-3xl font-bold">THE FAMILY</p>
            <p className="text-sm italic">Growing stronger</p>
          </Card>
          
          <Card className="bg-amber-100 border-2 border-black p-6 text-center font-serif">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <h3 className="text-xl font-bold">TOP EARNER</h3>
            <p className="text-lg">@CryptoCapo</p>
            <p className="text-sm italic">1,250 RP</p>
          </Card>
          
          <Card className="bg-amber-100 border-2 border-black p-6 text-center font-serif">
            <Share2 className="w-8 h-8 mx-auto mb-2" />
            <h3 className="text-xl font-bold">TOTAL MEMES</h3>
            <p className="text-lg">420</p>
            <p className="text-sm italic">And counting...</p>
          </Card>
        </div>

        {/* Daily Tasks Section */}
        <Card className="mb-8 bg-amber-100 border-2 border-black p-6">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-serif font-bold">THE DON'S DAILY TASKS</h2>
            <p className="text-lg font-serif mt-2">Complete tasks, earn respect, become a made member</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {dailyTasks.map((task) => (
              <div
                key={task.id}
                className={`bg-white border-2 border-black p-4 cursor-pointer transition-all ${
                  selectedTask === task.id ? 'ring-2 ring-red-800' : ''
                }`}
                onClick={() => setSelectedTask(task.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-black text-white p-3 rounded-full">
                    {task.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif font-bold text-xl">{task.title}</h3>
                        <p className="font-serif text-gray-600">{task.description}</p>
                      </div>
                      <span className="bg-red-800 text-white px-2 py-1 text-sm font-serif">
                        {task.reward}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm font-serif bg-gray-100 px-2 py-1">
                        Difficulty: {task.difficulty}
                      </span>
                      <span className="text-sm font-serif bg-gray-100 px-2 py-1">
                        Type: {task.type}
                      </span>
                      <span className="text-sm font-serif text-gray-600">
                        {task.completions} completions today
                      </span>
                    </div>
                  </div>
                </div>

                {selectedTask === task.id && (
                  <div className="mt-4 border-t-2 border-black pt-4">
                    <div className="bg-amber-50 p-4 font-serif">
                      <h4 className="font-bold mb-2">How to complete this task:</h4>
                      <ol className="list-decimal ml-4 space-y-2">
                        <li>Create your content following the task description</li>
                        <li>Share it on Twitter with #DONofICP</li>
                        <li>Submit the link below for verification</li>
                      </ol>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <input
                        type="text"
                        placeholder="Paste your submission link here"
                        className="flex-1 p-2 border-2 border-black font-serif"
                      />
                      <button className="bg-black text-white px-6 py-2 font-bold font-serif hover:bg-gray-900">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* The Don's Quotes */}
        <Card className="mb-8 bg-red-800 text-white p-8">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">WORDS OF WISDOM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black bg-opacity-50 p-6">
              <p className="font-serif italic mb-2">
                "I'm gonna make Web3 an offer it can't refuse: True internet-scale blockchain."
              </p>
              <p className="text-sm">- The Don (probably)</p>
            </div>
            <div className="bg-black bg-opacity-50 p-6">
              <p className="font-serif italic mb-2">
                "In ICP, we solve problems with canisters, not cannisters."
              </p>
              <p className="text-sm">- The Don (definitely not)</p>
            </div>
          </div>
        </Card>

        {/* Join the Family */}
        <Card className="bg-amber-100 border-2 border-black p-6 mb-8">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">JOIN THE FAMILY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-serif font-bold mb-2">Get Some ICP</h3>
              <p className="font-serif">Can't join the family without respect for the Don</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-serif font-bold mb-2">Swap for $DON</h3>
              <p className="font-serif">Make the exchange, become a made man</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-serif font-bold mb-2">HODL</h3>
              <p className="font-serif">Show your loyalty to the family</p>
            </div>
          </div>
        </Card>

        {/* Community Links */}
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-6">THE SOCIAL CLUB</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-6 py-3 font-serif flex items-center gap-2">
              <Twitter className="w-4 h-4" /> TWITTER
            </button>
            <button className="bg-red-800 text-white px-6 py-3 font-serif">
              TELEGRAM
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 font-serif">
        <div className="container mx-auto px-4 text-center">
          <p className="italic mb-4">$DON - Because every blockchain needs its Godfather</p>
          <p className="text-sm">This is a meme token. Not financial advice. DYOR.</p>
        </div>
      </footer>
    </div>
  );
};

export default DonMemeSite;
