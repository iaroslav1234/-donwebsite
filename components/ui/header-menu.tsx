import React from 'react';
import Link from 'next/link';

const HeaderMenu = () => {
  const menuItems = [
    {
      title: 'HQ',
      href: '/'
    },
    {
      title: 'The Family',
      href: '/family'
    },
    {
      title: 'Casino',
      href: '/casino'
    }
  ];

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Menu Items */}
          <div className="flex space-x-12">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-serif hover:text-amber-300 transition-colors text-lg"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMenu;
