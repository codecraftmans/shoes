import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Casual = () => {
  const [products , setproducts] = useState([
    {
      "id": 1,
      "name": "Nike Air Force 1",
      "brand": "Nike",
      "color": "White",
      "size": 10,
      "price": 90,
      
    },
    {
      "id": 2,
      "name": "Adidas Ultraboost",
      "brand": "Adidas",
      "color": "Black",
      "size": 11,
      "price": 120,
      "image": "https://example.com/images/adidas-ultraboost.jpg"
    },
    {
      "id": 3,
      "name": "Puma Suede Classic",
      "brand": "Puma",
      "color": "Red",
      "size": 9,
      "price": 70,
      "image": "https://example.com/images/puma-suede-classic.jpg"
    },
    {
      "id": 4,
      "name": "New Balance 574",
      "brand": "New Balance",
      "color": "Grey",
      "size": 12,
      "price": 85,
      "image": "https://example.com/images/new-balance-574.jpg"
    },
    {
      "id": 5,
      "name": "Jordan 1 Retro High",
      "brand": "Jordan",
      "color": "Red and Black",
      "size": 10.5,
      "price": 150,
      "image": "https://example.com/images/jordan-1-retro-high.jpg"
    },
    {
      "id": 6,
      "name": "Vans Old Skool",
      "brand": "Vans",
      "color": "Black and White",
      "size": 9.5,
      "price": 60,
      "image": "https://example.com/images/vans-old-skool.jpg"
    },
    {
      "id": 7,
      "name": "Converse Chuck Taylor All Star",
      "brand": "Converse",
      "color": "Black",
      "size": 11,
      "price": 55,
      "image": "https://example.com/images/converse-chuck-taylor-all-star.jpg"
    },
    {
      "id": 8,
      "name": "Reebok Classic Leather",
      "brand": "Reebok",
      "color": "White",
      "size": 10,
      "price": 75,
      "image": "https://example.com/images/reebok-classic-leather.jpg"
    },
    {
      "id": 9,
      "name": "Asics Gel-Kayano 27",
      "brand": "Asics",
      "color": "Blue",
      "size": 11.5,
      "price": 130,
      "image": "https://example.com/images/asics-gel-kayano-27.jpg"
    },
    {
      "id": 10,
      "name": "Saucony Jazz Original",
      "brand": "Saucony",
      "color": "Grey",
      "size": 10,
      "price": 80,
      "image": "https://example.com/images/saucony-jazz-original.jpg"
    },
    {
      "id": 11,
      "name": "Nike Air Max 90",
      "brand": "Nike",
      "color": "Grey",
      "size": 12,
      "price": 110,
      "image": "https://example.com/images/nike-air-max-90.jpg"
    },
    {
      "id": 12,
      "name": "Adidas Stan Smith",
      "brand": "Adidas",
      "color": "White",
      "size": 9.5,
      "price": 85,
      "image": "https://example.com/images/adidas-stan-smith.jpg"
    },
    {
      "id": 13,
      "name": "Puma Clyde",
      "brand": "Puma",
      "color": "Red",
      "size": 10,
      "price": 70,
      "image": "https://example.com/images/puma-clyde.jpg"
    },
    {
      "id": 14,
      "name": "New Balance 990v5",
      "brand": "New Balance",
      "color": "Grey",
      "size": 11,
      "price": 140,
      "image": "https://example.com/images/new-balance-990v5.jpg"
    },
    {
      "id": 15,
      "name": "Jordan 11 Retro",
      "brand": "Jordan",
      "color": "Black and Red",
      "size": 10.5,
      "price": 200,
      "image": "https://example.com/images/jordan-11-retro.jpg"
    },
    {
      "id": 16,
      "name": "Vans Sk8-Hi",
      "brand": "Vans",
      "color": "Black",
      "size": 10,
      "price": 70,
      "image": "https://example.com/images/vans-sk8-hi.jpg"
    },
    {
      "id": 17,
      "name": "Converse Chuck 70",
      "brand": "Converse",
      "color": "White",
      "size": 11,
      "price": 65,
      "image": "https://example.com/images/converse-chuck-70.jpg"
    },
    {
      "id": 18,
      "name": "Reebok Instapump Fury",
      "brand": "Reebok",
      "color": "Black and White",
      "size": 10.5,
      "price": 150,
      "image": "https://example.com/images/reebok-instapump-fury.jpg"
    },
    {
      "id": 19,
      "name": "Asics Gel-Lyte III",
      "brand": "Asics",
      "color": "Grey",
      "size": 11,
      "price": 110,
      "image": "https://example.com/images/asics-gel-lyte-iii.jpg"
    },
    {
      "id": 20,
      "name": "Saucony Shadow 5000",
      "brand": "Saucony",
      "color": "Blue",
      "size": 10,
      "price": 90,
      "image": "https://example.com/images/saucony-shadow-5000.jpg"
    },
    {
      "id": 21,
      "name": "Nike Air Max 97",
      "brand": "Nike",
      "color": "Silver",
      "size": 12,
      "price": 130,
      "image": "https://example.com/images/nike-air-max-97.jpg"
    },
    {
      "id": 22,
      "name": "Adidas Superstar",
      "brand": "Adidas",
      "color": "White",
      "size": 9.5,
      "price": 80,
      "image": "https://example.com/images/adidas-superstar.jpg"
    },
    {
      "id": 23,
      "name": "Puma RS-X",
      "brand": "Puma",
      "color": "Black",
      "size": 10,
      "price": 90,
      "image": "https://example.com/images/puma-rs-x.jpg"
    },
    {
      "id": 24,
      "name": "New Balance 992",
      "brand": "New Balance",
      "color": "Grey",
      "size": 11,
      "price": 160,
      "image": "https://example.com"
}
]
)

  return (
   <>
    <div div className='w-full  md:flex flex-wrap mt-9 md:gap-20 px-3 py-3  md:justify-center  '>

      {products.map((p,i)=>(
           <div className=' h-auto md:w-2/12 	relative hover:drop-shadow-lg cursor-pointer '>
           <span className='bg-red-500 text-white px-2 rounded-sm top-3 lg:left-36 md:left-64  absolute'>New</span>
           <img src="https://demo2.posthemes.com/pos_junno/56-home_default/new-balance-fresh-foam-kaymin.jpg" alt="shoe" />
           <p className='p-1 font-semibold text-sm text-slate-500 hover:text-red-500'>{p.name}</p>
               <div className='flex w-full'>
           <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
           <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
           <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
           <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
           <img className='h-4' src="https://img.icons8.com/plumpy/24/star--v1.png" alt="star--v1"/>

               </div>
    
           <h1 className='p-1 font-bold '>₹{p.price}</h1>
           <img className='absolute bottom-2 left-36 h-5' src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
           </div>
      ))}
                      
                  
                           

                           

     </div>
              
   </>
  )
}

export default Casual;