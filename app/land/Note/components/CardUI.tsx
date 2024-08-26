"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { RiDiscountPercentLine } from "react-icons/ri";


import fd1 from "/public/fd1.jpg";
import fd2 from "/public/fd2.jpg";
import fd3 from "/public/fd3.jpeg";
import fd4 from "/public/fd4.jpg";
import fd5 from "/public/fd5.jpg";
import fd6 from "/public/fd6.jpg";
import fd7 from "/public/fd7.jpg";
import fd8 from "/public/fd8.jpg";
import fd9 from "/public/fd9.jpg";

const CardUI = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
       <Foods
       imageSrc={fd1}
       offer="10% off"
       offer1="Welcome gift"
       title="Karachi Chaman Biryani"
       rate="4.7 "
       percentage="(100+)"
       discription="Pakistani"
       />
       <Foods
       imageSrc={fd2}
       offer="10% off"
       offer1="Welcome gift"
       title="Urban Grill & Desserts"
       rate="4.9 "
       percentage="(100+)"
       discription="Desserts"
       />
       <Foods
       imageSrc={fd3}
       offer="15% off"
       offer1="Welcome gift"
       title="Peshawari Bawarchi Khaana"
       rate="4.8 "
       percentage="(500+)"
       discription="Pakistani"
       />    
       <Foods
       imageSrc={fd4}
       offer="10% off"
       offer1="Welcome gift"
       title="Biryani Spot"
       rate="4.6"
       percentage="(100+)"
       discription="Pakistani"
       />       
       <Foods
       imageSrc={fd5}
       offer="15% off"
       offer1="Welcome gift"
       title="Tiffin by Rustic"
       rate="2.2"
       percentage="(100+)"
       discription="Pakistani"
       />
       <Foods
       imageSrc={fd6}
       offer="20% off"
       offer1="Welcome gift"
       title="Nocciola"
       rate="4.8"
       percentage="(1000+)"
       discription="Desserts"
       />       
       <Foods
       imageSrc={fd7}
       offer="10% off"
       offer1="Welcome gift"
       title="Chai O' Clock"
       rate="4.4"
       percentage="(100+)"
       discription="Fast Food"
       />
       <Foods
       imageSrc={fd8}
       offer="8% off"
       offer1="Welcome gift"
       title="Al Naseeb Biryani Center"
       rate="4.7"
       percentage="(36)"
       discription="Pakistani"
       />
       <Foods
       imageSrc={fd9}
       offer="5% off"
       offer1="Welcome gift"
       title="Rotisserie Chicken House"
       rate="4.8"
       percentage="(61)"
       discription="Pakistani"
       />       
       </div>
  )
}

function Foods(prop : any) {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <div className="overflow-hidden m-5 ml-0 border border-gray-300 rounded-lg group">
      <Link href={"#"}>
      <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
      <div className='relative w-full h-56  '>
      <Image
              src={prop.imageSrc}
              layout='fill'
              alt={`Image for ${prop.title}`}
              className='transform transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute m-2 inset-0 items-center lg:left-5'>
            <h1 className='text-white   inline-flex md:text-sm bg-pink-600 rounded-md px-2'> 
              <RiDiscountPercentLine className='gap-2 m-1' /> {prop.offer}</h1>
            </div>
            <div className='absolute inset-10 m-2   lg:left-5'>
            <h1 className='text-white   inline-flex md:text-sm bg-pink-600 rounded-md px-2'>
            <RiDiscountPercentLine className=' m-1' />
            {prop.offer1}</h1>
            </div>
            </div>
            
        <CardContent>
        <div className='flex justify-between '>
          <Typography gutterBottom variant="h5" component="div" className='text-xl font-bold'>
          {prop.title}
          </Typography>
          <div className='flex items-center'>
          <Typography variant="body2" color="text.secondary" className='flex items-center gap-2'>
          <Rating name="customized-1"
           value={value} size="small" defaultValue={2} max={1} className=''/>{prop.rate}{prop.percentage}
          </Typography> 
          </div>     
        </div>
        <div className=''>
          <Typography gutterBottom variant="h5" component="div" className='text-sm'>
          {prop.discription} 
          </Typography>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </div>
  );
}

export default CardUI