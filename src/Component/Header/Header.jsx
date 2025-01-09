// import React ,{useState} from 'react'
// import { Link } from 'react-router-dom'

// function Header() {
   

//   return (
//    <nav className='flex flex-row w-full h-36 m-0 p-0 items-center md:w-full box-border shadow-md shadow-slate-500 bg-zinc-200 '>


//     {/* Logo starts Here */}
//     <div className='flex w-70 h-28 m-0 p-3 '>
//         <div className='w-50 h-28 m-0 p-3'>
//         <img className='drop-shadow-2xl h-30 w-32' src="https://i0.wp.com/jetprintapp.com/wp-content/uploads/2023/02/Custom-shoes-logo.png?resize=1080,540&ssl=1" alt="Shoes" /> 
//         <h1 className='text-sm md:text-2xl font-bold'>Shoes Hub</h1>
//         </div>
       
//         </div>
//     {/* Logo ends Here */}


//     {/* Search box starts Here */}

//         {/* <div className='flex items-center ml-20 md:w-2/5 '>
//         <div className='w-full flex items-center'> */}

//         <input list='inputs' type="text" className='md:h-12 w-full md:w-2/4 h-1/5 border-2 rounded-l-md text-sm md:text-xl font-thin' placeholder='Enter Your Search Key Here...'/>
//          <datalist id='inputs'>
//             <option value="shoes for men"></option>
//             <option value="shoes for girls"></option>
//             <option value="shoes for kids"></option>
//             <option value="Mens Casual Shoes"></option>

//          </datalist>
       
//         <img  src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1"
//          className=' bg-red-400 p-3 md:h-12 h-1/5 rounded-r-md border border-slate-400
//          '/>   
//         {/* </div> width="50" height="50"
//         </div> */}

//         {/* Search box ends Here */}

//         {/* nav items starts Here */}
//         {/* <div className=' ml-14'> */}
//            <ul className='md:flex hidden flex-row font-semibold gap-8 text-xl space-x-3 ml-3  '>
//          <Link to="/" > <li className='cursor-pointer hover:text-white   '>Home</li> </Link>
//           <Link to="/about" > <li className='cursor-pointer hover:text-white'>About</li> </Link>
//           <Link to="/Contact">  <li className='cursor-pointer hover:hover:text-white'>Contact</li></Link>
           
//            </ul>
//         {/* </div> */}

//         {/* nav items Ends Here */}


//         {/* menubar start here */}
        
//      <div className='ml-14 md:hidden '>
//         <img  width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/menu--v3.png" alt="menu--v3" className=''/>
            
//         </div>
        

//    </nav>
//   )
// }

// export default Header

// import React, { useState } from 'react';
// import {Link} from 'react-router-dom'

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-4">
//           <div className="flex items-center">
//             <a href="/" className="font-bold text-xl">
//             <p className='bg-black text-white p-3 font-bold'>  <span className=''>Shoe</span> <span className='bg-yellow-600 py-1 px-2 text-black'>Hub</span></p>
//             </a>
//           </div>
//           <div className="hidden md:flex space-x-6">
//             <Link to="/" className="hover:text-gray-200">
//               Home
//             </Link>
//             <Link to="/about" href="#" className="hover:text-gray-200">
//               About
//             </Link>
//             <Link to="/contact" href="#" className="hover:text-gray-200">
//               Contact
//             </Link>
//           </div>
//           <div className="md:hidden">
//             <button
//               className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onClick={toggleMenu}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
//         id="mobile-menu"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-700">
//             Home
//           </Link>
//           <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-700">
//             About
//           </Link>
//           <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-700">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl">
              <p className="bg-black text-white p-3 font-bold">
                {' '}
                <span className="">Shoe</span>{' '}
                <span className="bg-yellow-600 py-1 px-2 text-black">Hub</span>
              </p>
            </Link>
          </div>
          <div className="relative hidden md:flex">
              <input
                type="text"
                placeholder="Search..."
                className="border w-80 border-gray-700 rounded-md text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {/* Add a magnifying glass icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-2 top-3 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0"
                />
              </svg>
            </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/about" href="#" className="hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" href="#" className="hover:text-gray-200">
              Contact
            </Link>
            
          </div>
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-700"
          >
            Contact
          </Link>
         
        </div>
      </div>
    </nav>
  );
}

export default Header;