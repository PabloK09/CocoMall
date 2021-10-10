import React from 'react';

const StoreState = ({ storeName, description, cloudImage }) => {
    return (
        <article className='flex h-36 w-72 shadow-lg m-4 rounded-md'>
            <div className='flex items-center w-1/4 bg-cocoMall-600 rounded-md relative'>
                <picture className='flex m-auto h-16 w-h-16 bg-cocoMall-50 rounded-full overflow-hidden shadow-lg absolute -right-6'>
                    <img className='p-3 shadow object-cover' src={cloudImage} alt='logo' />
                </picture>
            </div>

            <div className='text text-md text-center w-3/4 p-4'>
                <h3
                    className='text-cocoMall-600 font-bold
                                    md:text-lg
                                    xl:text-xl
                                    2xl:text-2xl
                                    mb-5'
                >
                    {storeName}
                </h3>

                <p className='text-sm ml-4'>{description}</p>
            </div>
        </article>
    );
};

export default StoreState;