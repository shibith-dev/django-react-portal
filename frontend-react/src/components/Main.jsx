import React from 'react'
import Button from './Button'

const Main = () => {
    return (
        <div className='mx-auto max-w-4xl px-4'>
            <div className='rounded-md bg-[#293136] p-6 text-center space-y-4'>
                <h2 className='text-xl font-medium md:text-2xl'>Stock Prediction Portal</h2>
                <p className='text-sm leading-6 text-slate-200 sm:text-base sm:leading-7'>
                    This stock prediction application utilizes ML
                    techniques, specifically employing Keras, TensorFlow, and LSTM
                    models, integrated within the Django framework. It forecasts
                    future stock prices by analyzing 100-day and 200-day moving
                    averages, essential indicators widely used by stock analysts
                    to inform trading and investment decisions.
                </p>
                <Button text="Login now"/>
            </div>
        </div>
    )
}

export default Main