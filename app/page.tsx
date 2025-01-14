'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import HeaderMenu from '@/components/ui/header-menu';
import { Twitter } from 'lucide-react';
import { useTokenData } from '@/hooks/useTokenData';

const DonMemeSite = () => {
  const tokenData = useTokenData();
  
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header Menu */}
      <HeaderMenu />
      
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="container mx-auto px-4 max-w-4xl py-6 text-center">
          <div className="text-sm mb-2 font-serif italic">&ldquo;Every Empire Needs Its Currency&rdquo;</div>
          <h1 className="text-6xl font-serif font-bold mb-2">$DON</h1>
          <div className="text-lg font-serif">TAKING OVER THE INTERNET COMPUTER</div>
        </div>
      </header>

      {/* Breaking News Banner */}
      <div className="bg-red-800 text-white py-2">
        <div className="container mx-auto px-4 max-w-4xl text-center font-serif animate-pulse">
          ALERT: OTHER BLOCKCHAINS MYSTERIOUSLY &ldquo;VOLUNTEERING&rdquo; THEIR MARKET SHARE TO THE DON 
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-4xl py-6">
        {/* Hero Section */}
        <Card className="mb-6 bg-amber-100 border-2 border-black p-6">
          <div className="text-center mb-6">
            <span className="bg-black text-white px-4 py-1 font-serif">THE STORY</span>
          </div>
          
          <div className="space-y-6 font-serif text-center max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed italic">
              &ldquo;Every family&apos;s got an origin story. This one? It starts with The Don...&rdquo;
            </p>
            
            <p className="text-lg">
              While Bitcoin was playing checkers and Ethereum was playing chess, Dominic &ldquo;The Don&rdquo; Williams was building an empire called Internet Computer. The kind of empire that makes traditional tech families nervous.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold">The Family Business</p>
                <p className="text-sm">Canisters running smoother than a protection racket</p>
              </div>
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold">The Don&apos;s Rules</p>
                <p className="text-sm">No middlemen, no cloud providers, no funny business</p>
              </div>
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold">Pure Business</p>
                <p className="text-sm">On-chain execution, just as The Don intended</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <Card className="bg-amber-100 border-2 border-black p-6 text-center font-serif">
            <h3 className="text-xl font-bold mb-2">STREET PRICE</h3>
            <p className="text-3xl font-bold">
              {tokenData.isLoading ? (
                <span className="animate-pulse">Loading...</span>
              ) : tokenData.error ? (
                <span className="text-red-600">--</span>
              ) : (
                `$${tokenData.price}`
              )}
            </p>
            <p className="text-sm italic">The Family Rate</p>
          </Card>
          
          <Card className="bg-amber-100 border-2 border-black p-6 text-center font-serif">
            <h3 className="text-xl font-bold mb-2">TERRITORY</h3>
            <p className="text-3xl font-bold">
              {tokenData.isLoading ? (
                <span className="animate-pulse">Loading...</span>
              ) : tokenData.error ? (
                <span className="text-red-600">--</span>
              ) : (
                `$${tokenData.marketCap}`
              )}
            </p>
            <p className="text-sm italic">Growing Every Day</p>
          </Card>
          
          <Card className="bg-amber-100 border-2 border-black p-6 text-center font-serif">
            <h3 className="text-xl font-bold mb-2">DAILY BUSINESS</h3>
            <p className="text-3xl font-bold">
              {tokenData.isLoading ? (
                <span className="animate-pulse">Loading...</span>
              ) : tokenData.error ? (
                <span className="text-red-600">--</span>
              ) : (
                `$${tokenData.volume24h}`
              )}
            </p>
            <p className="text-sm italic">Today&apos;s Action</p>
          </Card>
        </div>

        {/* First Video Section */}
        <div className="mb-6">
          <Card className="bg-amber-100 border-2 border-black p-6">
            <h2 className="text-2xl font-serif font-bold text-center mb-6">WHEN DONS COLLIDE</h2>
            <div className="relative aspect-video md:w-4/5 mx-auto rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-contain bg-black"
              >
                <source src="/don-message.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-center mt-4 font-serif italic">&ldquo;Let&apos;s make Internet Computer great again!&rdquo;</p>
          </Card>
        </div>

        {/* The Don's Quotes */}
        <Card className="mb-6 bg-red-800 text-white p-6">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">WORDS OF WISDOM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-black bg-opacity-50 p-6">
              <p className="font-serif italic mb-2">
                &ldquo;I&apos;m gonna make Web3 an offer it can&apos;t refuse: True internet-scale blockchain.&rdquo;
              </p>
              <p className="text-sm">- The Don (probably)</p>
            </div>
            <div className="bg-black bg-opacity-50 p-6">
              <p className="font-serif italic mb-2">
                &ldquo;In ICP, we solve problems with canisters, not cannisters.&rdquo;
              </p>
              <p className="text-sm">- The Don (definitely not)</p>
            </div>
          </div>
        </Card>

        {/* Second Video Section */}
        <div className="mb-8">
          <Card className="bg-red-800 text-white p-6">
            <h2 className="text-2xl font-serif font-bold text-center mb-6">A MESSAGE FROM THE DON</h2>
            <div className="relative aspect-video md:w-4/5 mx-auto rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-contain bg-black"
              >
                <source src="/other-done-message.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-center mt-4 font-serif italic">&ldquo;Join the family, or sleep with the fish.&rdquo;</p>
          </Card>
        </div>

        {/* Join the Family */}
        <Card className="bg-amber-100 border-2 border-black p-6 mb-6">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">JOIN THE FAMILY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-serif font-bold mb-2">Get Some ICP</h3>
              <p className="font-serif">Can&apos;t join the family without respect for the Don</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-serif font-bold mb-2">Swap for $DON</h3>
              <p className="font-serif">Make the exchange, become a made man</p>
              <a 
                href="https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=mgskz-6iaaa-aaaam-qcxaa-cai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block bg-red-800 text-white px-6 py-2 font-serif hover:bg-red-900 transition-colors"
              >
                SWAP NOW
              </a>
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
            <a 
              href="https://x.com/thedonicp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black text-white px-6 py-3 font-serif flex items-center gap-2 hover:bg-gray-800"
            >
              <Twitter className="w-4 h-4" /> TWITTER
            </a>
            <a 
              href="https://t.me/DomistheDON" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-800 text-white px-6 py-3 font-serif hover:bg-red-900"
            >
              TELEGRAM
            </a>
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
