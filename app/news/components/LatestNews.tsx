import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import cardImage1 from "/public/card1.jpg";
import cardImage2 from "/public/card2.jpg";
import cardImage3 from "/public/card3.jpg";
import food1 from "/public/food1.png";
import food2 from "/public/food2.png";
import food3 from "/public/food3.jpg";
import food4 from "/public/food4.jpg";
import food5 from "/public/food5.png";
import food6 from "/public/food6.png";
import food7 from "/public/food7.jpg";
import food8 from "/public/food8.jpg";
import food9 from "/public/food9.png";


const LatestNews = () => {
  return (
    <>
        <div className='flex justify-center mt-10 gap-10'>
          <div className='w-1/3'>
          <News
          imageSrc={cardImage2}
          title1="Merchants"
          title2="Merchants"
          discription="foodpanda Philippines partners with Jia to extend support to partner vendors "
          date="July 30, 2024"
        />
          </div>
          <div className='w-1/3'>
          <News
          imageSrc={cardImage3}
          title1="Riders"
          title2="Riders"
          discription="foodpanda Singapore awards $10,500 in bursaries to delivery partners and their families "
          date="30 Jul 2024"
        />
          </div>
          <div className='w-1/3'>
          <News
          imageSrc={cardImage1}
          title1="Food delivery"
          title2="Riders"
          title3="Riders"
          discription="foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced customer checkout experience"
          date="July 25, 2024"
        />
          </div>
          
        </div>


        <div className='flex justify-center mt-10 gap-10'>
          <div className='w-1/3'>
          <News
          imageSrc={food1}
          title="Food delivery"
          discription="foodpanda launches curated meals for solo diners with ‘Meal For One’ across Asia"
          date="11 Jul 2024"
        />
          </div>
          <div className='w-1/3'>
          <News
          imageSrc={food2}
          title="Food deliverypandago"
          discription="foodpanda introduces new pandapro perks with unlimited free delivery and surprise deals"
          date="10 Jul 2024"
        />
          </div>
          <div className='w-1/3'>
          <News
          imageSrc={food3}
          title="Merchants   Q-commerce"
          discription="foodpanda and Carlsberg join hands to enhance quick-commerce experience for customers in Asia 
"

          date="04 Jul 2024"
        />
          </div>
          
        </div>

        <div className='flex justify-center mt-10 gap-10'>
          <div className='w-1/3'>
          <News
          imageSrc={food4}
          title="Merchants"
          discription="foodpanda Philippines partners with Jia to extend support to partner vendors "
          date="July 30, 2024"
        />
          </div>
          <div className='w-1/3'>
          <News
          imageSrc={food5}
          title="Riders"
          discription="foodpanda Singapore awards $10,500 in bursaries to delivery partners and their families "
          date="30 Jul 2024"
        />
          </div>
          <div className='w-1/3'>
          <News
          imageSrc={food6}
          title="Food delivery"
          discription="foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced customer checkout experience"
          date="July 25, 2024"
        />
          </div>
          
        </div>

        <div className='flex justify-center mt-10 gap-10'>
          <div className='w-1/3'>
          <News
          imageSrc={food7}
          title="Merchants"
          discription="foodpanda Philippines partners with Jia to extend support to partner vendors "
          date="July 30, 2024"
        />
          </div>
          <div className='w-1/3'>
          <News
          imageSrc={food8}
          title="Riders"
          discription="foodpanda Singapore awards $10,500 in bursaries to delivery partners and their families "
          date="30 Jul 2024"
        />
          </div>
          <div className='w-1/3'>
          <News
          imageSrc={food9}
          title="Food delivery"
          discription="foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced customer checkout experience"
          date="July 25, 2024"
        />
          </div>
          
        </div>
    </>


  )
}
function News(prop : any) {
    return (
      <div className="  ">
        <Image
                src={prop.imageSrc}
                objectFit='cover'
                width={400}
                height={350}
                alt={`Image for ${prop.title}`}
                className="responsive w-full h-full object-cover"
              />
  
        <div>
          <h3 className='flex space-x-5 pt-5'>
            <Link href="#" className="text-pink-600 hover:to-black">
              {prop.title1}
            </Link>
            <Link href="#" className="text-pink-600 hover:to-black">
            {prop.title2}
            </Link>
            <Link href="#" className="text-pink-600 hover:to-black">
            {prop.title3}
            </Link>
          </h3>
          <p className='text-black font-bold pt-5'>{prop.discription} </p>
          <Link href="#" className="text-gray-800 text-sm">
          <p className='pt-5'>{prop.date}</p>
          </Link>
        </div>
      </div>
    );
  }
export default LatestNews