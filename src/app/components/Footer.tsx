import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { Button } from './ui/button'
import { Input } from './ui/input'


function Footer() {
  return (
    <footer className=' py-12 dark:bg-gray-900 bg-gray-100'>
      <div className='max-w-6xl mx-auto'>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 border-b-2'>
           <div>
           <h2 className='text-2xl font-bold'>About Us</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
           </div>
                
           
           <div>
               <h2 className='text-2xl font-bold'>Quick Links</h2>
            <ul>
               <li><Link href={"/"}>Home</Link></li>
               <li><Link href={"/about"}>Author</Link></li>
               <li>Archived</li>
               <li><Link href={"/blogPage"}>Blog</Link></li>
               <li><Link href={"/contact"}>Contact Us</Link></li>
               
            </ul>
            


           </div>
           <div>
           <h2 className='text-2xl font-bold'>Category</h2>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>

           </div>
           <div className='flex flex-col items-center gap-y-2 rounded-s p-2 shadow-sm dark:bg-black bg-white'>
           <h2 className='text-2xl font-bold'>Contact Us</h2>
           <p>Get blog articles and offers via email</p>
           <div className="hidden md:flex bg-gray-200 items-center gap-x-2 w-full h-[36px] px-2 rounded-lg">
                   <Input
                     type="text"
                     placeholder="Search..."
                     className="flex-grow p-1 bg-transparent outline-none h-full"
                   />
                   <FaEnvelope/>
                 </div>
                 <Button className='bg-blue-500 w-full'>Subscribe</Button>
           </div>
       </div>
     <div className='flex flex-col md:flex-row items-center justify-between'>
     <div className="flex items-center gap-x-2 ">
                <div className='bg-white rounded-full p-1'>
                <Image
                   src={"/Union.png"}
                   alt="logo pic"
                   width={200}
                   height={200}
                   className="w-6 h-6"
                 />
                </div>
                 <span className="text-lg font-bold">
                   Meta<span className="text-blue-500">Blog</span>
                 </span>
                 <p className='text-xs text-center'>&copy; 2024 Coding School. All right reserved.</p>

               </div>
               <div>
                <ul className='flex items-center gap-x-2'>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                </ul>
               </div>
      
     </div>
      </div>

    </footer>
  )
}

export default Footer