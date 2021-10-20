import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { /*addToCart*/ addToCartSomo } from '../../Redux/actions/shoppingActions';
import ReactModal from 'react-modal';
import { Redirect, useHistory } from 'react-router-dom';

import { Image } from 'cloudinary-react';
import Question from '../Forms/QuestionForm'
import QuestionAndAnswer from './QuestionAndAnswer'

ReactModal.setAppElement('#root');
export default function ProductDetail(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { product } = props;
    const { uid } = useSelector((state) => state.auth);
    const que = '+';
    const cant = 1;

    const handleButtonClick = (id) => {
        if (uid) {
            dispatch(addToCartSomo(uid, id, que, cant));
        } else {
            history.push('/auth/login');
        }
    };

    return (
        <>
            <div className='    flex justify-center w-full h-full'>
                <div className='flex justify-center items-center w-2/5 h-full p-6'>
                    <Image
                        key={product.id}
                        cloudName='cocomalls'
                        publicId={product.cloudImage[0]}
                        width='400'
                        crop='scale'
                    />
                </div>
                <div className='w-3/5 flex flex-col justify-between'>
                    <div className='flex flex-col justify-center mt-14'>
                        <h4 className='text-5xl mb-5 whitespace-nowrap font-semibold'>
                            {product.productName.toUpperCase()}
                        </h4>
                        <p className='text-base md:text-lg mt-14   text-justify xl:whitespace-nowrap w-5/6 2xl:text-3xl'>
                            {product.description}
                        </p>
                        <span className='text-base md:text-lg   text-justify xl:whitespace-nowrap w-5/6 2xl:text-3xl'>
                            {product.stock} unidades
                        </span>
                        <span className='text-lg font-semibold mt-14  md:text-lg   text-justify xl:whitespace-nowrap w-5/6 2xl:text-3xl'>
                            ${product.price}
                        </span>
                        {product.discount > 0 ? <span>{product.discount}</span> : false}
                    </div>
                    <button
                        className='font-bold text-center text-xl text-white bg-cocoMall-300 py-4'
                        onClick={() => handleButtonClick(product.id)}
                    >
                        Add Cart
                    </button>

                    <Question productId={product.id} />
                    <QuestionAndAnswer productId={product.id} />
                </div>
            </div>
        </>
    );
}
