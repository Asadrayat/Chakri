import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AllExperiencedCart from './AllExperiencedCart';

const AllExperienced = () => {
    const [exps, setExps] = useState([]);
    useEffect(() => {
        fetch('experienced.json')
            .then(res => res.json())
            .then(data => setExps(data))
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
                    exps.map(exp => <AllExperiencedCart
                        key={exp.id}
                        exp={exp}
                    ></AllExperiencedCart>)
                }
            </div>
        </div>

    );
};

export default AllExperienced;