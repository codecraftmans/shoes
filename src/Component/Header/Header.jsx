import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <nav className='flex flex-row w-full h-36 m-0 p-0 items-center md:w-full box-border shadow-md shadow-slate-500 bg-zinc-200 '>


    {/* Logo starts Here */}
    <div className='flex w-70 h-28 m-0 p-3 '>
        <div className='w-50 h-28 m-0 p-3'>
        <img className='drop-shadow-2xl h-30 w-32' src="https://i0.wp.com/jetprintapp.com/wp-content/uploads/2023/02/Custom-shoes-logo.png?resize=1080,540&ssl=1" alt="Shoes" /> 
        <h1 className='text-sm md:text-2xl font-bold'>Shoes Hub</h1>
        </div>
       
        </div>
    {/* Logo ends Here */}


    {/* Search box starts Here */}

        {/* <div className='flex items-center ml-20 md:w-2/5 '>
        <div className='w-full flex items-center'> */}

        <input list='inputs' type="text" className='md:h-12 w-full md:w-2/4 h-1/5 border-2 rounded-l-md text-sm md:text-xl font-thin' placeholder='Enter Your Search Key Here...'/>
         <datalist id='inputs'>
            <option value="shoes for men"></option>
            <option value="shoes for girls"></option>
            <option value="shoes for kids"></option>
            <option value="Mens Casual Shoes"></option>

         </datalist>
       
        <img  src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1"
         className=' bg-red-400 p-3 md:h-12 h-1/5 rounded-r-md border border-slate-400
         '/>   
        {/* </div> width="50" height="50"
        </div> */}

        {/* Search box ends Here */}

        {/* nav items starts Here */}
        {/* <div className=' ml-14'> */}
           <ul className='md:flex hidden flex-row font-semibold gap-8 text-xl space-x-3 ml-3  '>
         <Link to="/" > <li className='cursor-pointer hover:text-white   '>Home</li> </Link>
          <Link to="/about" > <li className='cursor-pointer hover:text-white'>About</li> </Link>
          <Link to="/Contact">  <li className='cursor-pointer hover:hover:text-white'>Contact</li></Link>
           
           </ul>
        {/* </div> */}

        {/* nav items Ends Here */}


        {/* menubar start here */}
        
     <div className='ml-14 md:hidden '>
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/menu--v3.png" alt="menu--v3" className=''/>
            
        </div>
        

   </nav>
  )
}

export default Header