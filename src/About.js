import React from 'react';
import question from './assets/Vector (7).png';
import grid from './assets/Frame 1000002250.png';
import rectangle from './assets/Rectangle 39335.png';

export default function About(){
    const data = [
        {
            id : 1,
            on: true,
            des : `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</br></br> I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`
        },
        {
            id : 2,
            on:false,
            des : 'Experiences'
        },
        {
            id : 3,
            on : false,
            des:'Recommended'
        }
    ]
    const [desc , setDesc] = React.useState({des : '' , id : ''});
    React.useEffect(() => {
        data.map(item => {
            if(item.on){
                setDesc({des : item.des , id : item.id});
            }
        })
    },[])
    const [about , setAbout] = React.useState(data);
    function info(id){
        setAbout((prev) => {
            const new_arr = prev.map(item => {
                if(item.id === id){
                    setDesc({des : item.des , id : item.id});
                    if(item.on){
                        return{
                            ...item
                        }
                    }
                    return {
                        ...item,
                        on : !item.on
                    }
                }
                else{
                    return{
                        ...item,
                        on : false
                    }
                }
            })
            return new_arr;
        })
    }

    return(
        <div className='flex flex-row gap-12 justify-evenly py-3 w-720 h-316 bg-right-box rounded-18.89'>
            <div className='w-24'>
                <div className='h-159.69 flex flex-col justify-between'>
                    <img src={question} className='hover:scale-110 cursor-pointer transition ease-in-out'/>
                    <img src={grid} className='hover:scale-110 cursor-pointer transition ease-in-out'/>
                </div>
            </div>
            <div className='w-614 rounded-24 flex flex-col gap-3'>
                <div className='w-614 flex h-62 bg-right-first-black rounded-24 p-1 gap-10'>
                    <button onClick={() => {info(1)}} className='w-195 rounded-24 text-text flex items-center justify-center font-poppins font-medium transition ease-in-out hover:-translate-y-px' style={{backgroundColor : desc.id === 1 ? '#212122' : '#171717',boxShadow : desc.id === 1 ? '0px 4.96px 12.4px 2.48px #00000040 inset,10px 14px 30px 13px #171717' : ''}}>About Me</button>
                    <button onClick={() => {info(2)}} className='w-195 rounded-24 text-text flex items-center justify-center font-poppins font-medium transition ease-in-out hover:-translate-y-px' style={{backgroundColor : desc.id === 2 ? '#212122' : '#171717',boxShadow : desc.id === 2 ? '0px 4.96px 12.4px 2.48px #00000040 inset,10px 14px 30px 13px #171717' : ''}}>Experiences</button>
                    <button onClick={() => {info(3)}} className='w-195 rounded-24 text-text flex items-center justify-center font-poppins font-medium transition ease-in-out hover:-translate-y-px' style={{backgroundColor : desc.id === 3 ? '#212122' : '#171717',boxShadow : desc.id === 3 ? '0px 4.96px 12.4px 2.48px #00000040 inset,10px 14px 30px 13px #171717' : ''}}>Recommended</button>
                </div>
                <div className='w-614 h-175 mt-24'>
                    <p dangerouslySetInnerHTML={{__html: desc.des}} className='font-jakarta font-normal text-sec-text'></p>
                </div>
            </div>
            <div className='w-24 flex flex-col justify-center'>
                <img src={rectangle}/>
            </div>
        </div>
    )
}