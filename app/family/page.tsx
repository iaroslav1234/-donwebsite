'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import HeaderMenu from '@/components/ui/header-menu';

const FamilyPage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <HeaderMenu />
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-amber-100 border-2 border-black p-6">
          <h1 className="text-4xl font-serif font-bold mb-6 text-center">The Family</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-2 border-black p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Made Members</h2>
              <p className="font-serif text-gray-700">Our most loyal and dedicated supporters who have proven their worth to the family.</p>
              <div className="mt-4 space-y-2">
                <p className="font-serif">@CryptoCapo - Consigliere</p>
                <p className="font-serif">@MemeQueen - Underboss</p>
                <p className="font-serif">@ICPmaxi - Capo</p>
              </div>
            </Card>

            <Card className="bg-white border-2 border-black p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Associates</h2>
              <p className="font-serif text-gray-700">Up and coming members working their way up the family hierarchy.</p>
              <div className="mt-4">
                <p className="font-serif italic">Complete daily tasks to become a made member.</p>
              </div>
            </Card>

            <Card className="bg-white border-2 border-black p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Join Us</h2>
              <p className="font-serif text-gray-700">Want to be part of something bigger? The family is always looking for new talent.</p>
              <button className="mt-4 w-full bg-red-800 text-white px-4 py-2 rounded font-serif hover:bg-red-700 transition-colors">
                Apply Now
              </button>
            </Card>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default FamilyPage;
