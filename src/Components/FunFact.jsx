import React from 'react';
import { GiCoffeeBeans } from 'react-icons/gi';
import { SiBuymeacoffee } from 'react-icons/si';
import { SlBadge } from 'react-icons/sl';
import { VscCoffee } from 'react-icons/vsc';

const FunFact = () => {
    return (
        <div className='bg-orange-100 text-yellow-950 py-5 mb-10'>
            <div className='w-9/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-4xl'><VscCoffee /></h1>
                    <h4 className='font-bold text-lg'>Awesome Aroma</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-4xl'><SlBadge /></h1>
                    <h4 className='font-bold text-lg'>High Quality</h4>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-4xl'><GiCoffeeBeans /></h1>
                    <h4 className='font-bold text-lg'>Pure Grades</h4>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-4xl'><SiBuymeacoffee /></h1>
                    <h4 className='font-bold text-lg'>Proper Roasting</h4>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default FunFact;