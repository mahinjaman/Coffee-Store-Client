import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaPenFancy, FaRegEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const CoffeeCard = ({ coffee, handleDelete }) => {
    const { name, chef, supplier, taste, category, details, photo , _id} = coffee;

    return (
        <div className='flex items-center p-5 gap-4 bg-gray-300 w-full'>
            <img className='w-5/12' src={photo} alt="" />
            <div className='text-start space-y-5'>
                <p><span className='font-bold'>Name:-</span> {name}</p>
                <p><span className='font-bold'>Chef:-</span> {chef}</p>
                <p><span className='font-bold'>Supplier:-</span> {supplier}</p>
            </div>
            <div className='flex flex-col space-y-3'>
                <button className='p-3 bg-orange-500 bg-opacity-70 rounded text-white text-lg'><Link to={`/coffee/details/${_id}`}><FaRegEye /></Link></button>
                <button className='p-3 bg-orange-950 bg-opacity-70 rounded text-white text-lg'><Link to={`/coffee/update/${_id}`}><FaPenFancy /></Link></button>
                <button onClick={() => handleDelete(_id)} className='p-3 bg-red-500 bg-opacity-70 rounded text-white text-lg'><MdDelete /></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
}


export default CoffeeCard;