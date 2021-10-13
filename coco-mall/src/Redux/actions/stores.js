import {
    GET_STORES,
    FILTER_STORE,
    SEARCH_BY_ID,
    GET_PRODUCT,
    GET_PRODUCT_DETAIL,
    FILTER_PRODUCTS,
    GET_PRODUCT_TYPES,
    ORDER_PRODUCTS,
    ORDER_STORE,
    SEARCH_BY_NAME,
} from './actionTypes';
import { STORES_URL, SEARCH_URL, BASE_URL } from '../../Scripts/constants';
import axios from 'axios';

export const getStores = () => {
    return async (dispatch) => {
        const response = await axios.get(STORES_URL);
        dispatch({ type: GET_STORES, payload: response.data });
    };
};

export const filterStores = (payload) => {
    const obj = {
        state: payload.state,
        types: payload.type,
        name: payload.searchProduct,
        nameStore: payload.searchStore,
        state: payload.searchState,
        // rating: payload.rating
    };
    return async (dispatch) => {
        const response = await axios.post(SEARCH_URL, obj);
        dispatch({ type: FILTER_STORE, payload: response.data });
    };
};

export const getStoresByName = () => {
    return async (dispatch) => {
        const response = await axios.get(SEARCH_URL);
        dispatch({ type: SEARCH_BY_NAME, payload: response.data });
    };
};

export const getStoreDetail = (id) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_BY_ID, payload: id });
    };
};

export const getProductsStore = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/product/${id}`);
        dispatch({ type: GET_PRODUCT, payload: response.data });
    };
};

export const getProductDetail = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_PRODUCT_DETAIL, payload: id });
    };
};

export const filterProducts = (id, payload) => {
    console.log(payload);
    const obj = {
        types: payload.type,
        name: payload.searchProduct,
        min: payload.min,
        max: payload.max,
        discount: payload.discount,
    };
    return async (dispatch) => {
        const response = await axios.post(`/product/filter/${id}`, obj);
        await dispatch({ type: FILTER_PRODUCTS, payload: response.data });
    };
};

export const getProductTypes = () => {
    return async (dispatch) => {
        const response = await axios.get(`/productType`);
        await dispatch({ type: GET_PRODUCT_TYPES, payload: response.data });
    };
};

export const ordersProduct = (payload) => {
    return async (dispatch) => {
        dispatch({ type: ORDER_PRODUCTS, payload });
    };
};

export const ordersStores = (payload) => {
    return async (dispatch) => {
        dispatch({ type: ORDER_STORE, payload });
    };
};
