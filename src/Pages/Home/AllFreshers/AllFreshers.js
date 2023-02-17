import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AllFreshersCart from './AllFreshersCart';
const AllFreshers = () => {
    const [freshers, setFreshers] = useState([]);
    useEffect(() => {
        fetch('freshers.json')
            .then(res => res.json())
            .then(data => setFreshers(data))
    }, [])
    return (
        <div>
            <h1 className="lg:text-6xl font-bold text-xl text-center m-20">
                <TypeAnimation
                    sequence={[`All the job offers for fresher `, 1000, '']}
                    speed={40}
                    wrapper="h2"
                    repeat={Infinity}
                />
            </h1>
            <div className='grid lg:grid-cols-3 gap-10 grid-cols-1 align-middle'>
                {
                    freshers.map(fresher => <AllFreshersCart
                        key={fresher.id}
                        fresher={fresher}
                    ></AllFreshersCart>)
                }
            </div>
        </div>

    );
};

export default AllFreshers;