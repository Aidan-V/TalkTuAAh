import React from 'react';

type MenuItem = {
  id: number;
  title: string;
  image: string;
};

const menuItems: MenuItem[] = [
  { id: 1, title: 'Pretzels', image: '/assets/pretzel.png' },
  { id: 2, title: 'Biscoff Cookies', image: '/assets/biscoff.png' },
  { id: 3, title: 'Snack Mix', image: '/assets/snackmix.png' },
  { id: 4, title: 'Fruit', image: '/assets/apple.png' },
  { id: 5, title: 'Napkins', image: '/assets/napkins.png' },
  { id: 6, title: 'Motion Sickness Bag', image: '/assets/bag.png' },
];

export default function FoodAndDrink() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Food & Drink Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >Request</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}