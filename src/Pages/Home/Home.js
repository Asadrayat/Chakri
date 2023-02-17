
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import banner from '../../assest/banner.jpg';
import ContuctUs from '../Contact/ContuctUs';
import Experienced from './Experienced/Experienced';
import Freshers from './Freshers/freshers';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {

        fetch('freshers.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const [eJobs, seteJobs] = useState([]);
    useEffect(() => {

        fetch('experienced.json')
            .then(res => res.json())
            .then(data => seteJobs(data))
    }, [])

    return (
        <div >
            <div className="hero bg-blue-100 p-20" >
                <div className="hero-content flex-col gap-2 lg:flex-row-reverse">
                    <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div>
                        <p className="py-6 font-extrabold text-8xl">New <span className='text-8xl text-cyan-600'>offers</span> are waiting for you</p>
                        <p className='text-3xl'>Find a new job</p>
                    </div>
                </div>
            </div>
            <div>

                <h1 className="lg:text-6xl font-bold text-xl text-center mt-20">
                    <TypeAnimation
                        sequence={["Job offers for fresher", 3000, '']}
                        speed={40}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div className='my-24'>
                <div className='grid gap-10 lg:grid-cols-3 grid-cols-1 mx-4'>
                    {
                        jobs?.map(job => <Freshers
                            key={job?.title}
                            job={job}
                        ></Freshers>).slice(Math.max(jobs.length - 6, 0))
                    }
                </div>
                <div className='flex justify-center mt-10'>
                    <Link to='/freshers'><button className='btn btn-info font-bold '>See All JOBS</button></Link>
                </div>
                {/* experienced  */}

                <div>

                    <h1 className="lg:text-6xl font-bold text-xl text-center mt-20">
                        <TypeAnimation
                            sequence={["Job offers for experienced", 3000, '']}
                            speed={40}
                            wrapper="h2"
                            repeat={Infinity}
                        />
                    </h1>
                </div>
                <div className='grid gap-10 lg:grid-cols-3 grid-cols-1 my-24 mx-4'>
                    {
                        eJobs?.map(ejob => <Experienced
                            key={ejob?.title}
                            ejob={ejob}
                        ></Experienced>).slice(Math.max(jobs.length - 6, 0))
                    }
                </div>
                <div className='flex justify-center mt-10'>
                    <Link to='/experienced'><button className='btn btn-info font-bold '>See All JOBS</button></Link>
                </div>
                <div className='my-24'>
                    <ContuctUs></ContuctUs>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;