import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

function Products() {

  return (
    // main div
    <div className=' mt-3 '>
        <div>
            {/* our products */}

        <h1 className='text-3xl text-center p-4 '>Our Products</h1>
        <p className='text-center text-slate-400'>Add our Products to weekly line up</p>
        </div>
        {/* buttons */}
        <div className=' hidden md:flex mt-4  justify-center gap-6'>  
        <Link to="/men/shoes"  className=' hover:border-2 hover:border-red-500 hover:text-red-500 text-slate-500 px-6 py-2 rounded-lg font-bold cursor-pointer '   >MEN SHOES</Link>
        <Link to="/women/shoes" className=' hover:border-2 hover:border-red-500 hover:text-red-500 text-slate-500 px-6 py-2 rounded-lg font-bold cursor-pointer ' >WOMEN SHOES</Link>
        <Link to="/casual/shoes" className=' hover:border-2 hover:border-red-500 hover:text-red-500 text-slate-500 px-6 py-2 rounded-lg font-bold cursor-pointer '  >CASUAL SHOES</Link>

        </div>

        {/* collection */}

        {/* first */}

        < div className='w-full  md:flex flex-wrap mt-9 md:gap-20 px-3 py-3  md:justify-center '>
                      
        <div className=' h-auto md:w-2/12 	relative hover:drop-shadow-lg  '>
            <span className='bg-red-500 text-white px-2 rounded-sm top-3 lg:left-36 md:left-64  absolute'>New</span>
            <img src="https://demo2.posthemes.com/pos_junno/60-home_default/water-and-wind-resistant-insulated-jacket.jpg" alt="shoe" />
            <p className='p-1 font-semibold text-sm text-slate-500 hover:text-red-500'>Water And Wind Resistant Insulated Jacket</p>
                <div className='flex w-full'>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/plumpy/24/star--v1.png" alt="star--v1"/>

                </div>
     
            <h1 className='p-1 font-bold '>₹1013</h1>
            <img className='absolute bottom-2 left-36 h-5' src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            </div>

            


            



            {/* second */}
            <div className=' h-auto md:w-2/12 	relative hover:drop-shadow-lg  '>
            <span className='bg-red-500 text-white px-2 rounded-sm top-3 lg:left-36 md:left-64  absolute'>New</span>
            <img src="https://demo2.posthemes.com/pos_junno/36-home_default/new-luxury-men-s-slim-fit-shirt-short-sleeve-stylish-casual-blouse.jpg" alt="shoe" />
            <p className='p-1 font-semibold text-sm text-slate-500 hover:text-red-500'>New Luxury Men's Slim Fit Shirt Short Sleeve...</p>
                <div className='flex w-full'>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/plumpy/24/star--v1.png" alt="star--v1"/>

                </div>
     
            <h1 className='p-1 font-bold '>₹2250</h1>
            <img className='absolute bottom-2 left-36 h-5' src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            </div>

            {/* third */}

            <div className=' h-auto md:w-2/12 	relative hover:drop-shadow-lg  '>
            <span className='bg-red-500 text-white px-2 rounded-sm top-3 lg:left-36 md:left-64  absolute'>New</span>
            <img src="https://demo2.posthemes.com/pos_junno/76-home_default/new-balance-running-arishi-trainers-in-triple.jpg" alt="shoe" />
            <p className='p-1 font-semibold text-sm text-slate-500 hover:text-red-500'>New Balance Running Arishi trainers in triple</p>
                <div className='flex w-full'>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/plumpy/24/star--v1.png" alt="star--v1"/>

                </div>
     
            <h1 className='p-1 font-bold '>₹1100</h1>
            <img className='absolute bottom-2 left-36 h-5' src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            </div>

            {/* fourth */}
            <div className=' h-auto md:w-2/12 	relative hover:drop-shadow-lg  '>
            <span className='bg-red-500 text-white px-2 rounded-sm top-3 lg:left-36 md:left-64  absolute'>New</span>
            <img src="https://demo2.posthemes.com/pos_junno/56-home_default/new-balance-fresh-foam-kaymin.jpg" alt="shoe" />
            <p className='p-1 font-semibold text-sm text-slate-500 hover:text-red-500'>New Balance Fresh Foam Kaymin</p>
                <div className='flex w-full'>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img className='h-4' src="https://img.icons8.com/plumpy/24/star--v1.png" alt="star--v1"/>

                </div>
     
            <h1 className='p-1 font-bold '>₹1500</h1>
            <img className='absolute bottom-2 left-36 h-5' src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            </div>
                  
        </div>

        {/* chatgpt */}






        
      
      
    </div>
  )
}

export default Products