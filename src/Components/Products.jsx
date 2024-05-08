import React from 'react';
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'
import CoffeeCard from './CoffeeCard';

const Products = ({ coffees, handleDelete }) => {


    return (
        <div className='bg-slate-50 text-yellow-950 text-center flex flex-col justify-center items-center'>
            <p>---Slip & Savor---</p>
            <h1 className='text-5xl font-bold mb-5'>Our Popular Coffee</h1>
            <button className='flex items-center mb-5 gap-2 py-2 px-5 border border-yellow-950 rounded font-semibold'><Link to={'/add-coffee'}>Add Coffee</Link> <FaCoffee /></button>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete}></CoffeeCard>)
                }
            </div>
        </div>
    );
};


Products.propTypes = {
    coffees: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
};


export default Products;