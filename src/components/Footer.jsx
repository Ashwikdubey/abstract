import React from 'react'
import { Abstract, Community, Company, Resources } from '../constants'
import logo from "../assets/logo.svg"
const Footer = () => {
  return (
    <div className='bg-black pb-20 pt-10 px-10  text-white relative '>
      <div className="lg:grid lg:grid-cols-5 grid grid-cols-2">
       <div>
        <h2 className='mb-5 text-xl font-semibold'>Abstract</h2>
        <ul>
          {Abstract.map((val,index)=>(
              <li key={index} className='my-1 hover:underline'>
                <a href="">{val.link}</a>
              </li>
          ))}
        </ul>
       </div>
       <div>
        <h2 className='mb-5 text-xl font-semibold'>Resources</h2>
        <ul>
          {Resources.map((val,index)=>(
              <li key={index} className='my-1 hover:underline'>
                <a href="">{val.link}</a>
              </li>
          ))}
        </ul>
       </div>
       <div>
        <h2 className='mb-5 text-xl font-semibold'>Community</h2>
        <ul>
          {Community.map((val,index)=>(
              <li key={index} className='my-1 hover:underline'>
                <a href="">{val.link}</a>
              </li>
          ))}
        </ul>
       </div>
       <div>
        <h2 className='mb-5 text-xl font-semibold'>Company</h2>
        <ul>
          {Company.map((val,index)=>(
              <li key={index} className='my-1 hover:underline'>
                <a href="">{val.link}</a>
              </li>
          ))}
        </ul>
        <div className='mt-8'>
          <h2 className='font-semibold'>Contact us</h2>
          <span>info@abstract.com</span>
        </div>
       </div>
      </div>
      <div className='relative -bottom-7 -left-3 '>
        <img src={logo} className='w-28 mb-5' alt="" />
        <p>© Copyright 2023</p>
        <p>Abstract Studio Design,Inc.</p>
        <p>All Rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
