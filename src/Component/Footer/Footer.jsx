// import React from 'react'

// function Footer() {
//   return (
//     <div className='h-96 w-full md:flex flex-wrap  justify-between'>

//       <div className='bg-purple-50 md:w-1/4 flex flex-col w-full '>
//       <div className='bg-cover bg-center w-44 h-auto sm:p-3'>
//         <img className='h-30 ' src="https://i0.wp.com/jetprintapp.com/wp-content/uploads/2023/02/Custom-shoes-logo.png?resize=1080,540&ssl=1" alt="" />
//       <h1 className='text-2xl font-semibold text-center'>Shoes Hub</h1>
//       <p className='p-2 mt-10 font-bold leading-10'>IF I EVER LET MY HEAD DOWN , IT WILL BE TO ADMIR MY SHOES</p>
//       </div>
      
      
      
//       </div>
//       <div className=' w-full bg-purple-100 md:w-3/4 md:flex md:flex-row flex-wrap p-16 justify-evenly gap-y-10'>
//       <div className='w-1/5 '>
//         <h1 className='font-bold text-xl uppercase'>Information</h1>
//         <div className='leading-10 mt-4 font-semibold '>
//         <p className='hover:text-red-500 cursor-pointer'>Delivery</p>
//         <p className='hover:text-red-500 cursor-pointer'>About us</p>
//         <p className='hover:text-red-500 cursor-pointer'>Secure Payment</p>
//         <p className='hover:text-red-500 cursor-pointer'>Contact us</p>
//         <p className='hover:text-red-500 cursor-pointer'>Sitemap</p>
//         <p className='hover:text-red-500 cursor-pointer'>Stores</p>
//         </div>
       
        
//       </div>
//       <div className='w-1/5 '>
//         <h1 className='font-bold text-xl uppercase'>Coustom links</h1>
//         <div className='leading-10 mt-4 font-semibold'>
//         <p className='hover:text-red-500 cursor-pointer'>Legal Notice</p>
//         <p className='hover:text-red-500 cursor-pointer'>Price Drop</p>
//         <p className='hover:text-red-500 cursor-pointer'>New Products</p>
//         <p className='hover:text-red-500 cursor-pointer'>Best Sales</p>
//         <p className='hover:text-red-500 cursor-pointer'>Login</p>
//         <p className='hover:text-red-500 cursor-pointer'>My Account</p>

//         </div>
//       </div>

//       <div className='md:w-4/12 w-full relative '>
//         <h1 className='font-bold text-xl uppercase'>Newsteller</h1>
//         <p className='font-semibold mt-4 leading-6'>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice</p>
     
      
//       </div>

      
//       </div>


//     </div>
//   )
// }

// export default Footer

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Shoe Hub. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>
            </a>
            <a href="#" className="hover:text-gray-200">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter"/>
            </a>
            <a href="#" className="hover:text-gray-200">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;