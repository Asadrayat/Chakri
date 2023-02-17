import React from 'react';
import { Link } from 'react-router-dom';

const BCompCart = ({ BComp }) => {
    const { name, description, website, image_url, location } = BComp;
    return (
        
        <div className="card w-full bg-purple-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl h-44 w-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <Link to={website} target="_blank"><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BCompCart;