import React from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div className='lg:w-7/12 mx-auto pt-10'>
            <Link to={-1} className='text-lg flex items-center gap-1 py-5'><IoChevronBack /> Back To Home</Link>
            <div className='p-20 bg-orange-950 bg-opacity-35'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-20'>
                    <img src={photo} alt="" />
                    <div>
                        <h1 className='font-bold text-3xl'>Niceties</h1>
                        <p className='text-lg'><span className='font-semibold'>Name:- </span>{name}</p>
                        <p className='text-lg'><span className='font-semibold'>Chef:- </span>{chef}</p>
                        <p className='text-lg'><span className='font-semibold'>Supplier:- </span>{supplier}</p>
                        <p className='text-lg'><span className='font-semibold'>Taste:- </span>{taste}</p>
                        <p className='text-lg'><span className='font-semibold'>Category:- </span>{category}</p>
                        <p className='text-lg'><span className='font-semibold'>Details:- </span>{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;