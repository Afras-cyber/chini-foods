"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cardImage1 from "/public/card1.jpg";
import cardImage2 from "/public/card2.jpg";
import cardImage3 from "/public/card3.jpg";


const cards = [
  {
    id: 1,
    image: cardImage1,
    title: "Food delivery",
    date: "July 25, 2024",
    description:
      "foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced customer checkout experience",
  },
  {
    id: 2,
    image: cardImage2,
    title: "Merchants",
    date: "July 30, 2024",
    description:
      "foodpanda Philippines partners with Jia to extend support to partner vendors ",
  },
  {
    id: 3,
    image: cardImage3,
    title: "Press Releases",
    date: "July 30, 2024",
    description:
      "foodpanda Singapore awards $10,500 in bursaries to delivery partners and their families ",
  },
];

const CardNews = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  mt-10 mb-10 w-full h-96">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute  w-full h-full  transition-opacity duration-500 ${
            index === currentCard ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='grid grid-cols-2 h-full'>
            <div className='relative w-full h-full'>
              <Image
                src={card.image}
                layout='fill'
                objectFit='cover'
                alt={`Image for ${card.title}`}
                className="responsive"
              />
            </div>
            <div className="bg-gray-100 p-10">
            <div className="flex items-center space-x-5 mt-10 mb-1 pt-10">
                <h2 className="text-xl font-semibold text-pink-600">{card.title}</h2>
                <p className="text-gray-500 text-sm">{card.date}</p>
              </div>
              <Link href="/contact" className="text-black text-2xl font-extrabold hover:text-pink-600">{card.description}</Link>
          </div>
          </div>
        </div>
      ))}
    </div>
    
  );
};


export default CardNews;
