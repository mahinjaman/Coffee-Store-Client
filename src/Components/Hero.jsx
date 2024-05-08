import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-fit py-24 bg-left-top lg:bg-bottom" style={{ backgroundImage: 'url(https://i.ibb.co/GPXGxkj/hero-bg.png)' }}>
            <div className="hero-content text-neutral-content">
                <div className=" lg:ml-[50%] my-20">
                    <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="py-3 duration-500 bg-orange-300 text-black px-5 font-semibold hover:text-orange-300 hover:bg-transparent border border-orange-300">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;