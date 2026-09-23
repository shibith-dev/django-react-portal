import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.url} className='rounded-md bg-cyan-500 px-3 py-1.5 text-xs font-medium text-slate-900 transition hover:bg-cyan-400 sm:text-sm'>{props.text}</Link>
  )
}

export default Button