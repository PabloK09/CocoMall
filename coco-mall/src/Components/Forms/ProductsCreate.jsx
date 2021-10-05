import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import InputDefault from '../Inputs/InputDefault';
import InputFile from '../Inputs/InputFile';
import { postProduct } from '../../Scripts/post';
import { IMG_DEFAULT } from '../../Scripts/constants';
import validate from '../../Scripts/validate';

const ProductsCreate = () => {
    //--HOOKS--
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: 'onTouched' });

    //STATES
    const [image, setImage] = useState('');
    const [isUploaded, setIsUploaded] = useState(false);

    //LOAD IMAGE
    const handleImageChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
            setIsUploaded(true);
        };
    };

    //Obtener el id de la STORE que crea el producto
    let idStore = '5038c6e8-ac4a-4e5b-a374-dd9192084719';

    //POST DATA PRODUCT & ID STORE
    const onSubmit = (data) => {
        let productCreated = { product: data, storeId: idStore, idImage: image, typeId: 1 };

        alert('Product Created!');
        console.log(productCreated);
        dispatch(postProduct(productCreated));
    };

    //TODO get de categorias -> hacer input SELECT

    return (
        <div className='flex flex-col text-center h-screen py-3 overflow-hidden relative'>
            {/* --CONTAINER-- */}
            <div className=' flex justify-center items-center m-auto p-8 z-10 '>
                <form
                    className='flex flex-col w-80 h-full gap-10 p-8 focus-within:relative'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className='text-xl text-center mb-4'>Create Product</h3>
                    <InputDefault
                        register={register}
                        errors={errors}
                        name='productName'
                        placeholder='Eg: T-Shirt'
                        validate={validate.product}
                    />
                    <InputDefault
                        register={register}
                        errors={errors}
                        name='description'
                        placeholder='Eg: Description of T-Shirt'
                        validate={validate.description}
                    />
                    <InputDefault
                        register={register}
                        errors={errors}
                        name='price'
                        placeholder='Eg: 1500'
                        type='number'
                        validate={validate.price}
                        className=''
                    />
                    <InputDefault
                        register={register}
                        errors={errors}
                        name='stock'
                        placeholder='Eg: 15'
                        type='number'
                        validate={validate.price}
                    />
                    <InputFile
                        register={register}
                        errors={errors}
                        name='image'
                        type='file'
                        validate={validate.image}
                        watch={watch}
                        onChange={handleImageChange}
                    />

                    <div className='flex items-center justify-between'>
                        <input
                            className='bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            type='submit'
                        />
                    </div>
                </form>

                {/* --PREVIEW-- */}
                <div
                    className='hidden bg-white shadow-md rounded p-8 m-4 w-80 text-center
                                lg:block overflow-hidden'
                >
                    <img src={isUploaded ? image : IMG_DEFAULT} alt='img' />
                    <p className='font-bold mt-5 text-2xl'>
                        {watch('productName') ? watch('productName').toUpperCase() : 'PRODUCT'}
                    </p>
                    <p className='mt-1'>
                        {watch('description') ? watch('description') : 'description'}
                    </p>
                    <p className='text-xl'>{watch('price') ? `$ ${watch('price')}` : '$0.00'}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsCreate;
