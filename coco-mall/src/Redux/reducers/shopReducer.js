import {
    GET_STORES,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    GET_PRODUCT,
    SHOPPING_CART_TYPES,
    GET_PRODUCT_DETAIL,
    FILTER_PRODUCTS,
    GET_PRODUCT_TYPES,
    ORDER_PRODUCTS,
} from '../actions/actionTypes';

const initialState = {
    allStores: [],
    storesByName: {},
    storeDetail: {},
    storeProducts: [],
    storeProductsFilter: [],
    productDetail: {},
    productTypes: [],
    cart: [],
};

export const storeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_STORES:
            return {
                ...state,
                allStores: payload,
            };

        case SEARCH_BY_NAME:
            return {
                ...state,
                storesByName: payload,
            };

        case SEARCH_BY_ID:
            return {
                ...state,
                storeDetail: state.allStores.find((store) => {
                    return store.id === payload;
                }),
            };

        case GET_PRODUCT:
            return {
                ...state,
                storeProducts: payload,
                storeProductsFilter: payload,
            };

        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: state.storeProductsFilter.find((product) => {
                    return product.id === payload;
                }),
            };

        case FILTER_PRODUCTS:
            return {
                ...state,
                storeProductsFilter: payload,
            };

        case GET_PRODUCT_TYPES:
            return {
                ...state,
                productTypes: payload,
            };
        //usar .slice() para actualiar el estado en los order
        case ORDER_PRODUCTS:
            if (payload === 'Barato') {
                let copy = state.storeProductsFilter
                    .sort(function (a, b) {
                        return a.price - b.price;
                    })
                    .slice();
                return {
                    ...state,
                    storeProductsFilter: copy,
                };
            }
            if (payload === 'Caro') {
                let copy = state.storeProductsFilter
                    .sort(function (a, b) {
                        return b.price - a.price;
                    })
                    .slice();
                return {
                    ...state,
                    storeProductsFilter: copy,
                };
            }
            if (payload === 'Mas relevantes') {
                return {
                    ...state,
                    storeProductsFilter: state.storeProductsFilter.sort(function (a, b) {
                        if (a.productName > b.productName) return 1;
                        if (b.productName > a.productName) return -1;
                        return 0;
                    }).slice()
                };
            }

        case SHOPPING_CART_TYPES.ADD_TO_CART: {
            let newItem = state.storeProducts?.find((item) => item.id === payload);
            let repeatedItem = state.cart?.find((item) => item.id === newItem.id);

            return repeatedItem
                ? {
                      ...state,
                      cart: state.cart.map((item) =>
                          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item,
                      ),
                  }
                : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
        }
        case SHOPPING_CART_TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === payload);

            return itemToDelete.quantity > 1
                ? {
                      ...state,
                      cart: state.cart.map((item) =>
                          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item,
                      ),
                  }
                : { ...state, cart: state.cart.filter((item) => item.id !== payload) };
        }

        case SHOPPING_CART_TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload),
            };
        }

        case SHOPPING_CART_TYPES.CLEAR_CART: {
            return {
                ...state,
                cart: [],
            };
        }

        default:
            return state;
    }
};
