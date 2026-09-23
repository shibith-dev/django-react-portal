import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const userData = {
            username, email, password
        }
        try {
            const response = await axios.post("http://localhost:8000/api/v1/register/", userData)
            setErrors({})
            setUsername('')
            setEmail('')
            setPassword('')
            setSuccess(true)
        } catch (error) {
            setErrors(error.response.data)
        }finally{
            setLoading(false)
        }

    }
    return (
        <div className='px-4'>
            <div className='mx-auto w-full max-w-xl rounded-md bg-[#293136] p-6'>
                <h2 className='mb-6 text-2xl font-medium'>Create an Account</h2>
                <form action="" className='flex flex-col' onSubmit={handleForm}>
                    <label htmlFor="">Username</label><input type="text" name="" id="" placeholder='john_doe' value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-md mt-1 outline-none bg-slate-100 px-3 py-1.5 text-black' />

                    <label htmlFor="" className='mt-3'>Email</label><input type="email" name="" id="" placeholder='john@example.com' value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-md mt-1 outline-none bg-slate-100 px-3 py-1.5 text-black' />
                    {error.email && <div className='text-sm text-red-700 tracking-wide'>{error.email}</div>}
                    <label htmlFor="" className='mt-3'>Password</label><input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-md mt-1 outline-none bg-slate-100 px-3 py-1.5 text-black' />
                    {error.password && <div className='text-sm text-red-700 tracking-wide'>{error.password}</div>}
                    {success && <div className='rounded-md mt-4 mb-[-12px] bg-yellow-400 px-3 py-1.5 text-slate-800'>Registration Successfull</div>}
                    {loading ? <button type='submit' disabled className='rounded-md bg-cyan-500 mt-8 py-2 text-xs font-medium text-slate-900 transition hover:bg-cyan-400 sm:text-sm'> <FontAwesomeIcon icon={faSpinner} spin />Please wait...</button> : <button type='submit' className='rounded-md bg-cyan-500 mt-8 py-2 text-xs font-medium text-slate-900 transition hover:bg-cyan-400 sm:text-sm'>Register</button>}
                </form>
            </div>
        </div>
    )
}

export default Register