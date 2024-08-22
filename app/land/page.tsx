import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Note from './Note/page';

import phone from "/public/phone.webp";
import apple from "/public/apple.jpg";
import play from "/public/play.jpg";

const page = () => {
  return (
    <>
    <Navbar />
    <Note />
    <div className='m-10'>
      <h1 className='font-bold  mb-5'>Food delivery in Islamabad has never been easier</h1>
      <p className='mb-5'>Pakistan &apos;s capital and a pulsating, energetic and cosmopolitan city, Islamabad enjoys a multicultural and diverse food scene. Thanks to its rapid urbanisation, you can find numerous international chains as well as incredibly popular local and traditional establishments, offering nearly unlimited cuisine options when it comes to dining out. What &apos,s even more exciting, food delivery in Islamabad is now made super-easy and convenient. Reason? foodpanda serves across the length and breadth of this largest city of Pakistan, enabling easy delivery from restaurants in Islamabad.</p>
      
      <h1 className='font-bold mb-5'>Islamabad food delivery is just what modern fast-paced lifestyles need</h1>
      <p className='mb-5'>Aside from health reasons, savouring great food could be a wonderful stress-buster! Especially in a thriving metropolis like Islamabad, you would be leading a very busy lifestyle where food always takes a backseat. Late to the office? No time to prepare food for lunch? Lazy to get up on a Sunday morning? Well, these are just a few of the everyday scenarios where you are most likely going to skip your meals. With food delivery in Islamabad, you never have to forgo your food. With our online portal and mobile app, you can quickly choose from hundreds and hundreds of restaurants, cafes, and takeaways in your city and get satisfying, healthy and delicious food right at your doorstep!</p>

      <h1 className='font-bold mb-5'>What to order from Islamabad restaurants for delivery
      </h1>
      <p className='mb-5'>Perhaps, you are a die-hard fan of local delicacies prepared in a traditional way. Angeethi, Andaaz, Al-Nakheel Lebanese Cuisine, and Islamabad Grill are a few of the excellent places you can consider for authentic Pakistani food prepared just like at home. If lucky, you can even snap up our fantastic food deals in Islamabad to save some decent money while indulging to your heart&apos;s content. Maybe, you are gathering together with your friends to watch that most awaited cricket match of the year. Why not order some wonderful food, desserts and drinks to spice up the moment? Fish Fingers, Chicken Strips, and Chili Fries from Incantare Cafe & Grill, or Rajasthani Chicken Malai boti with drink and Masala Fish With Naan + Drink from Humpty Dumpty are some of the best-selling options worth a try using our prompt food delivery in Islamabad. From Subway sandwiches to Johnny Rockets burgers, from Sarang Sindhi Cuisine &apos;s Chicken Briyani to Big Bites&apos; Chicken Combo, from Fruit Factory&apos;s smoothies to Chick Fillet pizzas, our impressive selection of restaurants come handy to suit every taste, mood, and occasion</p>

      <h1 className='font-bold mb-5'>Famous restaurants for online food delivery in Islamabad </h1>
      <p className='mb-5'>Looking for the best pizza places in Islamabad? Want to treat your friends to the finest sandwiches in the city? Or simply love to experiment with your food choices or need late night foode delivery in Islamabad? Well, take advantage of these most popular Islamabad food delivery options, favoured by thousands of discerning foodies and casual customers alike.</p>

      <h1 className='font-bold mb-5'>Top Restaurants of Islamabad include…</h1>
      <p className='mb-5'>✓ 14th Street Pizza: One of the best places for pizzas In Islamabad <br />
         ✓ KFC : Classic and beloved fried chicken <br />
         ✓ The New Yorker Pizza – another favourite of the city &apos;s pizza lovers <br />
         ✓ McDonald &apos;s – needs no introduction and offers something for everyone <br />
         ✓ Char Grill Centre(CGC): Comfort food that everyone adores!</p>

      <h1 className='font-bold mb-5'>Presenting “no-cook Ramzan” only by foodpanda</h1>
      <p className='mb-5'>Feeling tired? Don’t want to go out in this scorching hot weather? Here comes the solution to your problem. Now order food in Islamabad from your favourite restaurants through foodpanda and make your Ramzan flavorful with bestest Sehri and Iftari deals with free delivery services. foodpanda fulfil your cravings by delivering food at your doorstep.</p>

      <h1 className='font-bold mb-5'>foodpanda bringing your favourite food to your doorstep!</h1>
      <p className='mb-5'>foodpanda provides you ease to order through online food delivery in Islamabad. Ordering food becomes easier because foodpanda provides you free delivery with minimum order of just Rs.200/-. Want to have delicious Sehri without going out? Just order through foodpanda anytime. Ramzan is all about food, fasting becomes delightful when scrumptious Iftari delivered within minutes.</p>

      <h1 className='font-bold mb-5'>Best Ramzan deals – for sehri and iftari available for delivery</h1>
      <p className='mb-5'>foodpanda giving major discounted deals to the people of Islamabad on Sehri and Iftari. So Islamabadis, don’t waste your time and boost your cravings this Ramzan with foodpanda delivery services without any hassle.</p>
      <p className='mb-5'> ✓ KFC <br />
          ✓ Mcdonalds <br />
          ✓ Chaaye Khana <br />
          ✓ ChikaChino <br />
          ✓ Tuscany Courtyard <br />
          ✓ Street 1 cafe</p>

          </div>

      <div className='bg-gray-50 flex items-center justify-center gap-5 h-20'>
        <div>
        <Image src={phone} alt="phoneimage"  width={150} height={150} className="" />
        </div>
        <div className='font-thin'>Download our free app!</div>
        <div className='flex gap-3'>
          <Link href={"https://apps.apple.com/us/app/foodpanda-food-groceries/id758103884"}><Image src={apple} alt="apple"  width={150} height={150} className="" /></Link>
          <Link href={"https://play.google.com/store/apps/details?id=com.global.foodpanda.android&referrer=adjust_reftag%3DcfFNbId9XhHVZ%26utm_source%3DWebsite%26utm_campaign%3DPK_orderTrackingPage_Badge_AND&pli=1"}><Image src={play} alt="play"  width={150} height={150} className="" /></Link>
        </div>
      </div>
    <Footer />

    </>
  )
}

export default page


  