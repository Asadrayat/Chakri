import React, { useEffect, useState } from 'react';
import BCompCart from './BCompCart';
import WCompCart from './WCompCart';

const TopIt = () => {
    const [BComps, setBComps] = useState([]);
    useEffect(() => {

        fetch('bangladeshIt.json')
            .then(res => res.json())
            .then(data => setBComps(data))
    }, [])
    const [WComps, setWComps] = useState([]);
    useEffect(() => {

        fetch('worldIt.json')
            .then(res => res.json())
            .then(data => setWComps(data))
    }, [])
    return (
        <div>
            <div>
                <p className='text-2xl font-extrabold text-center'>Top Companies In Bangladesh</p>
                <div className='grid gap-10 lg:grid-cols-3 grid-cols-1 mx-4 my-10'>
                    {
                        BComps.map(BComp => <BCompCart
                            key={BComp.name}
                            BComp={BComp}
                        ></BCompCart>)
                    }
                </div>
            </div>
            <div>
                <p className='text-2xl font-extrabold text-center'>Top Companies In World</p>
                <div className='grid gap-10 lg:grid-cols-3 grid-cols-1 mx-4 my-10'>
                    {
                        WComps.map(WComp => <WCompCart
                            key={WComp.name}
                            WComp={WComp}
                        ></WCompCart>)
                    }
                </div>
            </div>
        </div>

    );
};

export default TopIt;