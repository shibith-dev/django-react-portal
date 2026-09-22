import React from 'react'

const Button = (props) => {
  return (
    <a href='a' className='rounded-md bg-cyan-500 px-3 py-1.5 text-xs font-medium text-slate-900 transition hover:bg-cyan-400 sm:text-sm'>{props.text}</a>
  )
}

export default Button