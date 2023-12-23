import { Logo } from './Logo'
import { Button } from './Button'
import {
  AiOutlineClose as CloseIcon,
  AiOutlineMenu as MenuIcon,
} from 'react-icons/ai'
import { useState } from 'react'

export function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex w-full items-center justify-between py-5 px-7 sticky top-0 bg-white xs:opacity-95 md:backdrop-blur-2xl '>
      <div>
        <Logo />
      </div>

      <ul className='md:flex flex-row gap-[34px] text-[17px] font-normal tracking-wide p-2 hidden '>
        <li className='bg-gradient-to-r from-[#BF4DAC] to-[#287FF3] text-transparent bg-clip-text cursor-pointer'>
          <a href='/'>We&apos;re Hiring</a>
        </li>
        <li className='cursor-pointer'>
          <a href='/'>Services</a>
        </li>
        <li className='cursor-pointer'>
          <a href='/'>Company</a>
        </li>
        <li className='cursor-pointer'>
          <a href='/'>Clients</a>
        </li>
        <li className='cursor-pointer'>
          <a href='/'>Blog</a>
        </li>
      </ul>

      <div className='hidden md:flex'>
        <Button title='Schedule a Call >' />
      </div>

      <div onClick={handleNav} className='block md:hidden z-30 cursor-pointer'>
        {nav ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
      </div>

      <div
        className={
          nav
            ? 'fixed top-0 w-[94%] h-[66%] md:hidden bg-[#fff] shadow-2xl ease-in-out duration-150 z-10'
            : 'fixed top-[-100%]'
        }
      >
        <ul className='w-full flex flex-col text-start text-base gap-8 font-light tracking-wide p-2 mt-4 z-20 md:z-50 md:hidden cursor-pointer'>
          <li className='flex flex-col'>
            <span>SERVICES</span>
            <a href='/'>Staff Argumentation</a>
            <a href='/'>Softwre Outscoring</a>
            <a href='/'>Product Discovery</a>
          </li>
          <li>
            <span>We&apos;re Hiring</span>
          </li>
          <li className='flex flex-col'>
            <span>COMPANY</span>
            <a href='/'>About</a>
            <a href='/'>Hiring Process</a>
            <a href='/'>Nonprofits</a>
            <a href='/'>Frequently Asked Questions</a>
          </li>
          <li>
            <a href='/'>Clients</a>
          </li>
          <li>
            <a href='/'>Blog</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
