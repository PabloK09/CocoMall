import React from 'react';
import { Link } from 'react-router-dom';

function HomeCards({storeName, description, cloudImage}) {
    return (
        <article className='h-22  shadow-lg'>
            <img className='object-cover h-40 w-full' src='https://picsum.photos/600/400?image=1083' alt='banner' />

            <div className='flex justify-center px-5 -mt-6'>
                <img
                    className=' h-14 w-14
                                bg-white rounded-full
                                shadow
                                sm:h-16 sm:w-16
                                md:h-20 md:w-20
                                xl:-mt-4
                                2xl:h-20 2xl:w-20'
                    src={cloudImage}
                    alt='logo'
                />
            </div>
            <div>
                <div className='text text-md'>
                    <h3
                        className='text-primary font-bold
                                    md:text-lg
                                    xl:text-xl
                                    2xl:text-2xl
                                    mb-5'
                    >
                        {storeName}
                    </h3>

                    <p className='text-sm'>
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default HomeCards;
