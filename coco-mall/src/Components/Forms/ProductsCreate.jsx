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

    //Obtener el id de la STORE que crea el producto REDUX
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
        <div
            className='w-full flex justify-center items-center m-auto'
        >
            {/* --CONTAINER-- */}
            <div className='w-full flex justify-center items-center m-auto px-10 lg:px-24 xl:p-0'>
                <form
                    className='w-full xl:w-1/3 flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className='mb-12 sm:mb-10 text-2xl md:text-3xl'>Create your Product</h3>
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

                    <button
                        type='submit'
                        className='w-full bg-secondary rounded my-4 p-2 text-white'
                    >
                        Send
                    </button>
                </form>

                {/* --PREVIEW-- */}
                <div
                    className='hidden bg-white shadow-md rounded py-8 ml-4 w-80 text-center
                                xl:block overflow-hidden'
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
