import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
        <div className='container mx-auto mt-10'>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          <News
          imageSrc={cardImage2}
          title="MERCHANTS"
          title2="PRESS RELEASES"
          discription="foodpanda Philippines partners with Jia to extend support to partner vendors "
          date="July 30, 2024"
        />
          
          
          <News
          imageSrc={cardImage3}
          title="PRESS RELEASES"
          title2="RIDERS"
          discription="foodpanda Singapore awards $10,500 in bursaries to delivery partners and their families "
          date="30 Jul 2024"
        />
          
          <News
          imageSrc={cardImage1}
          title="FOOD DELIVERY"
          title2="PRESS RELEASES"
          title3="Q-COMMERCE"
          discription="foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced customer checkout experience"
          date="July 25, 2024"
        />
          
          <News
          imageSrc={food1}
          title="FOOD DELIVERY"
          title2="PRESS RELEASES"
          discription="foodpanda launches curated meals for solo diners with ‘Meal For One’ across Asia "
          date="11 Jul 2024"
        />
          
          <News
          imageSrc={food2}
          title="FOOD DELIVERY"
          title2="PANDAGO"
          title3="PRESS RELEASES"
          discription="foodpanda introduces new pandapro perks with unlimited free delivery and surprise deals "
          date="10 Jul 2024"
        />
          
          <News
          imageSrc={food3}
          title="MERCHANTS"
          title2="PRESS RELEASES"
          title3="Q-COMMERCE"
          discription="foodpanda and Carlsberg join hands to enhance quick-commerce experience for customers in Asia "
          date="04 Jul 2024"
        />
          

        
          <News
          imageSrc={food4}
          title="INFOGRAPHICS"
          title2="SUSTAINABILITY"
          discription="pandapurpose 2023 "
          date="27 Jun 2024"
        />
          
          <News
          imageSrc={food5}
          title="PRESS RELEASES"
          title2="RIDERS"
          discription="foodpanda reaffirms commitment to enhance delivery partners’ work experience with ‘panda hearts’  "
          date="06 Jun 2024"
        />
          
          <News
          imageSrc={food6}
          title="FOOD DELIVERY"
          title2="PRESS RELEASES"
          discription="foodpanda makes convenience more affordable with ‘Meal For One’, offering curated set menus from $9.99"
          date="04 Jun 2024"
        />
          
          
        
          <News
          imageSrc={food7}
          title="PRESS RELEASES"
          title2="Q-COMMERCE"
          discription="Wellcome and Market Place are now on foodpanda Hong Kong"
          date="28 May 2024"
        />
          
          <News
          imageSrc={food8}
          title="EDITORIALS"
          title2="PANDA ADS"
          discription="Catching the retail media wave: Why brands should take the plunge now"
          date="23 May 2024"
        />
          
          <News
          imageSrc={food9}
          title="PRESS RELEASES"
          title2="Q-COMMERCE"
          discription="foodpanda redefines convenient shopping with item replacement feature"
          date="16 May 2024"
        />
          </div>
        
        <Stack spacing={2} className='ml-96 mt-20 align-middle justify-center' >
         <Pagination count={10} color="primary"  />
       </Stack>
      
        </div>
        
    </>


  )
}
function News(prop : any) {
    return (
      <div className="overflow-hidden">
        <div className='relative w-full h-64'>
        <Image
                src={prop.imageSrc}
                layout='fill'
                alt={`Image for ${prop.title}`}
              />
        </div>
        <div>
          <h3 className='pt-5'>
            <Link href="#" className="text-pink-600 font-bold pr-3 hover:to-black">
              {prop.title}
            </Link>
            <Link href="#" className="text-pink-600 font-bold pr-3 hover:to-black">
              {prop.title2} 
            </Link>
            <Link href="#" className="text-pink-600 font-bold pr-3 hover:to-black">
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