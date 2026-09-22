import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <nav className='mx-auto w-full max-w-5xl flex justify-between px-3 py-4'>
        <a href="" className='text-sm font-medium text-slate-200 sm:text-base'>Stock Prediction Portal</a>
        <div className='space-x-2'>
            <a href="" className='rounded-md border border-cyan-500/70 px-3 py-1.5 text-xs font-medium text-cyan-400 transition hover:bg-cyan-500/10 sm:text-sm'>Login</a>
            <Button text="Register"/>
        </div>
    </nav>
  )
}

export default Header