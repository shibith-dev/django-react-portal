import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useContext } from 'react';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    const handleForm = async (e) => {
        e.preventDefault()
        setLoading(true)

        const userData = {
            username, password
        }

        try {
            const response = await axios.post("http://localhost:8000/api/v1/token/", userData)
            localStorage.setItem('access-token', response.data.access)
            localStorage.setItem('refresh-token', response.data.refresh)
            setIsLoggedIn(true)
            navigate('/')
        } catch (error) {
            setErrors(error.response.data)
            console.error("Registration Failed", error.response.data)
        }finally{
            setLoading(false)
        }

    }
    return (
        <div className='px-4'>
            <div className='mx-auto w-full max-w-xl rounded-md bg-[#293136] p-6'>
                <h2 className='mb-6 text-2xl font-medium'>Login to out Portal</h2>
                <form action="" className='flex flex-col' onSubmit={handleForm}>
                    <label htmlFor="">Username</label><input type="text" name="" id="" placeholder='john_doe' value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-md mt-1 outline-none bg-slate-100 px-3 py-1.5 text-black' />
                    <label htmlFor="" className='mt-3'>Password</label><input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-md mt-1 outline-none bg-slate-100 px-3 py-1.5 text-black' />
                    {error.detail && <div className='mt-3 text-sm text-red-700 tracking-wide'>{error.detail}</div>}
                    {loading ? <button type='submit' disabled className='rounded-md bg-cyan-500 mt-8 py-2 text-xs font-medium text-slate-900 transition hover:bg-cyan-400 sm:text-sm'> <FontAwesomeIcon icon={faSpinner} spin />Please wait...</button> : <button type='submit' className='rounded-md bg-cyan-500 mt-8 py-2 text-xs font-medium text-slate-900 transition hover:bg-cyan-400 sm:text-sm'>Login</button>}
                </form>
            </div>
        </div>
    )
}

export default Login