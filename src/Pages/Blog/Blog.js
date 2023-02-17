import React from 'react';
import img from "../../assest/about.jpg";
const Blog = () => {
    return (
        <div className="hero bg-blue-100 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt='Chakri' />
                <div>
                    <div className="p-5">
                        <div className="container mx-auto py-8">
                            <h1 className="text-3xl font-bold mb-4">About Our Job Portal Site</h1>
                            <p className="mb-4">We are dedicated to connecting job seekers with the best job opportunities in the market. Our mission is to make the job search process easier and more efficient for everyone.</p>
                            <p className="mb-4">We work with top companies across various industries to provide the best job opportunities to our users. Our team of experienced recruiters are constantly on the lookout for new job openings and work tirelessly to match the right candidates with the right jobs.</p>
                            <p className="mb-4">Our platform is user-friendly and easy to navigate, making it simple for job seekers to search for job openings and apply for positions. We also provide valuable resources and career advice to help our users succeed in their job search.</p>
                            <p className="mb-4">Thank you for choosing our job portal site for your job search needs. We look forward to helping you find your next great opportunity!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;
