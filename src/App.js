import React from 'react';
import About from './About';
import Gallery from './Gallery'

export default function App(){
    return(
        <div className='box-border flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start w-screen h-fit lg:h-screen bg-base pt-29 lg:pt-96 overflow-hidden p-29'>
            
            <div className='lg:w-836 max-w-836 w-full h-689 lg:mr-29 lg:ml-29 h-4 bg-left rounded-1 mb-29 lg:mb-0'></div>
            
            <div className='flex flex-col items-center gap-20 lg:pl-29 pb-29 lg:mt-0'>
                <About />
                <div className='w-652 h-4 bg-line rounded-2.46'></div>
                <Gallery />
                <div className='w-652 h-4 bg-line rounded-2.46'></div>
            </div>
        </div>
    )
}