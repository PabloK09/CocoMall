import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreDetail, getProductsStore, getStores } from '../Redux/actions/stores';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BiCurrentLocation } from 'react-icons/bi';

import HomeCard from '../Components/Cards/HomeCards';
import NavBar from '../Components/NavBar/NavBar';
import Search from '../Components/Inputs/Search';
import { handleOnChange, handleOnSubmit, handleOnChecked } from '../Scripts/handles';
import coco from '../Assets/icons/coco.png';
import SearchState from '../Components/Inputs/SearchState';
import SliderHero from '../Components/Sliders/SliderHero';
import SliderTypes from '../Components/Sliders/SliderTypes';
import SlidersCards from '../Components/Sliders/SlidersCards';
import axios from 'axios';
import { GOOGLE_MAPS_API_KEY } from '../Scripts/constants';

function Home() {
    const dispatch = useDispatch();
    const { productTypes, storesFilters, allStores } = useSelector((state) => state.stores);
    //const { userInfoDB } = useSelector((state) => state.auth);

    const [filterByState, setFilterByState] = useState([]);
    const [city, setCity] = useState('');
    const [typeSearch, setTypeSearch] = useState(false);
    const [checkType, setCheckType] = useState([]);
    const [check, setCheck] = useState(new Array(productTypes.length).fill(false));
    const [filters, setFilters] = useState({
        searchStore: '',
        searchProduct: '',
        type: [],
        searchState: '',
    });

    

    const storeDetail = (id) => {
        dispatch(getStoreDetail(id));
        dispatch(getProductsStore(id));
    };

    let id;
    const handleChange = handleOnChange(setFilters);
    const handleSubmit = handleOnSubmit(filters, checkType, dispatch);
    const handleChecked = handleOnChecked(
        checkType,
        setCheckType,
        filters,
        dispatch,
        id,
        check,
        setCheck,
    );


    useEffect(() => {
        onCurrentPosition();
    }, [city])

    //current position
    const onCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            axios
                .get(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=locality&key=${GOOGLE_MAPS_API_KEY}`,
                )
                .then((res) => res.data)
                .then((city) => {
                    let currentCity = city.results[0].formatted_address
                        ?.split(',')
                        .slice(-2, -1)[0]
                        .trim();
                    setCity(currentCity);

                    axios
                        .post('/store/filter', { state: currentCity })
                        .then((res) => res.data)
                        .then((stateStores) => {
                            setFilterByState(stateStores);
                        });
                });
        });
    };

    return (
        <div className='grid grid-col-6 grid-rows-8 h-screen bg-gray-200'>
            <div className='z-10 col-span-6 row-span-1 row-end-1 bg-gray-200 shadow'>
                <NavBar />
            </div>

            {/* CARDS */}
            <div className='w-full col-span-6 row-span-full px-6 md:px-12 xl:px-24 overflow-y-scroll'>
                {/* --- ADS --- */}
                <div className='m-auto 2xl:w-3/4 z-0'>
                    <SliderHero />
                </div>

                {/* --- SEARCH & FILTERS --- */}
                <div className='m-auto mt-6 2xl:w-3/4 2xl:mt-16'>
                    <Search
                        typeSearch={typeSearch}
                        setTypeSearch={setTypeSearch}
                        searchProduct={filters.searchProduct}
                        searchStore={filters.searchStore}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />

                    <div className=' h-36 m-auto'>
                        <SliderTypes
                            productTypes={productTypes}
                            handleChecked={handleChecked}
                            check={check}
                            checkType={checkType}
                        />
                    </div>
                    <div className='hidden'>Ordenamientos</div>
                    <div className='hidden'>
                        <SearchState
                            searchState={filters.searchState}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>

                <div className='2xl:w-3/4 m-auto mt-4'>
                    {/* --- STORES BY CITY --- */}
                    {allStores === storesFilters ? (
                        <div className='2xl:mt-6'>
                            <h3 className='inline-block text-xl 2xl:text-2xl font-bold text-cocoMall-800'>
                                {city ? (
                                    `Stores in ${city}`
                                ) : (
                                    <div className='flex gap-2'>
                                        <span>Stores in your city</span>
                                        <button
                                            className='pointer rounded-full p-1 bg-cocoMall-200 text-white hover:bg-cocoMall-400'
                                            onClick={onCurrentPosition}
                                        >
                                            <BiCurrentLocation />
                                        </button>
                                    </div>
                                )}
                            </h3>

                            <SlidersCards filterByState={filterByState} storeDetail={storeDetail} />
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                dispatch(getStores());
                                setFilters({
                                    searchStore: '',
                                    searchProduct: '',
                                    type: [],
                                    searchState: '',
                                });
                                setCheckType([]);
                                setCheck(Array(productTypes.length).fill(false));
                            }}
                            className='flex items-center gap-2 text-cocoMall-200 mb-2 cursor-pointer hover:text-cocoMall-400'
                        >
                            <IoMdArrowRoundBack /> <span>GO BACK</span>
                        </button>
                    )}

                    {/* --- ALL STORES ---- */}
                    <div className='mt-6 '>
                        {/* agregar cantidad de resultados y mostrar el texto que buscó */}
                        <h3 className='text-2xl font-bold text-cocoMall-800'>
                            {allStores !== storesFilters ? filters.searchStore : 'All Stores'}
                        </h3>
                        <div className='cards'>
                            {storesFilters.length ? storesFilters?.map((e) => (
                                <Link to={`/home/store/${e.id}`} onClick={() => storeDetail(e.id)}>
                                    <HomeCard
                                        id={e.id}
                                        storeName={e.storeName}
                                        description={e.description}
                                        cloudImage={e.cloudImage || coco}
                                        key={e.id}
                                    />
                                </Link>
                            )): <span className='text-cocoMall-800 text-2xl font-extrabold whitespace-nowrap'>There are no stores matching your search.</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
