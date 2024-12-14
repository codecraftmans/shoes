// import React from 'react'

// function Card() {
//   return (
//     <div className='flex flex-row flex-wrap w-full gap-7 pt-3 px-4 mt-2'>
//         <img className='w-1/2 bg-cover bg-center ' src="https://demo2.posthemes.com/pos_junno/img/cms/1_1.jpg" alt="" />
//         <img className='w-1/5 bg-cover bg-center' src="https://demo2.posthemes.com/pos_junno/img/cms/2_1.jpg" alt="" />
//         <img className='' src="https://demo2.posthemes.com/pos_junno/img/cms/3_1.jpg" alt="" />
//     </div>
//   )
// }

// export default Card

import React from 'react';

function Card() {

  return (
    <div>

    <div className='md:flex md:flex-row flex-wrap w-full gap-7  pt-3 px-4 mt-2 overflow-hidden'>
      <img
        className=' w-full mb-6 md:w-1/2 bg-cover bg-center transition-transform duration-500 transform hover:scale-x-125 '
        src="https://demo2.posthemes.com/pos_junno/img/cms/1_1.jpg"
        alt="Image 1"
      />
      <img
        className='w-full mb-6 md:w-1/5 bg-cover bg-center transform transition-transform duration-300 hover:scale-110'
        src="https://demo2.posthemes.com/pos_junno/img/cms/2_1.jpg"
        alt="Image 2"
      />
      <img
        className='w-full mb-6 md:w-1/5 transform transition-transform duration-300 hover:scale-110'
        src="https://demo2.posthemes.com/pos_junno/img/cms/3_1.jpg"
        alt="Image 3"
      />
    </div>

    </div>

  );
}

export default Card;
