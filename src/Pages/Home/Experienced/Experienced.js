import React from 'react';

const Experienced = ({ ejob }) => {
    const { jobTitle, location, salary, logo, applyButton } = ejob;
    return (
        <div className="card card-compact bg-blue-100  shadow-xl">
            <figure><img src={logo} alt="Movie" className='h-16 w-16 pt-5' /></figure>
            <div className="card-body">
                <h2 className="card-title">{jobTitle}</h2>
                <h2 className="card-title">Salary: {salary}</h2>
                <h2 className='text-small'>Location: {location}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">{applyButton}</button>
                </div>
            </div>
        </div>
    );
};

export default Experienced;