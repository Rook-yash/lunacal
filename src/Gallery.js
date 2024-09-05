import React from 'react';
import question from './assets/Vector (7).png';
import grid from './assets/Frame 1000002250.png';
import angle from './assets/Angle.png';
import arrow_right from './assets/Group 28.png';
import arrow_left from './assets/Group 28 (1).png'

export default function Gallery(){
    const [photos , setPhotos] = React.useState([<img key={0} src={angle}/>])
    function adding(){
        setPhotos((prev) => {
            return[...prev,<img key={prev.length+1} src={angle}/>]
        })
    }
    function scrolling(){
        const container = document.querySelector('.no-scrollbar');
        container.scrollTo({
            left: container.scrollLeft + 105, 
            behavior: 'smooth' 
          });
    }
    function scrolling2(){
        const container = document.querySelector('.no-scrollbar');
        container.scrollTo({
            left: container.scrollLeft - 105, 
            behavior: 'smooth' 
          });
    }
    return(
        <div className='flex flex-row gap-12 justify-evenly py-3 w-720 h-330 bg-right-box rounded-18.89'>
            <div className='w-24'>
                <div className='h-159.69 flex flex-col justify-between'>
                    <img src={question} className='hover:scale-110 cursor-pointer transition ease-in-out'/>
                    <img src={grid} className='hover:scale-110 cursor-pointer transition ease-in-out'/>
                </div>
            </div>
            <div className='w-652 flex flex-col gap-46'>
                <div className='flex justify-between items-center w-614 flex h-62 rounded-24 gap-10'>
                    <div className='w-149 h-62 rounded-20 bg-right-first-black text-white flex items-center justify-center font-poppins font-medium'>Gallery</div>
                    <div className='flex flex-row gap-9 items-center'>
                        <button className='w-131.32 h-46 font-jakarta font-extrabold text-white bg-left rounded-104 shadow-plus hover:scale-110 transition ease-in-out' onClick={adding}>+ Add Image</button>
                        <div className= 'flex items-center gap-5'>
                            <div onClick={scrolling2} className='hover:scale-110 transition cursor-pointer ease-out shadow-arrow1 w-46 h-46 bg-arrow rounded-full flex justify-center items-center'>
                                <img src={arrow_left}/>
                            </div>
                            <div onClick={scrolling} className='hover:scale-110 transition cursor-pointer ease-out shadow-arrow1 w-46 h-46 bg-arrow rounded-full flex justify-center items-center'>
                                <img src={arrow_right}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex gap-5 overflow-x-scroll mr-24 no-scrollbar'>
                    {photos}
                </div>
            </div>
        </div>
    )
}
//                <img src={arrow} onClick={scrolling2} className='relative h-96 cursor-pointer left-5 top-1 hover:scale-110 transition ease-in-out'/>
//                            <img src={arrow2} onClick={scrolling} className='relative h-96 cursor-pointer right-2 top-1 hover:scale-110 transition ease-in-out'/>