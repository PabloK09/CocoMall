import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebaseConfig';
import { login } from './Redux/actions/auth';

import { getStores, getProductTypes } from './Redux/actions/stores';

import { setCart } from './Redux/actions/shoppingActions';

import StorePanel from './Views/StorePanel';
import Landing from './Views/Landing';
import LoginScreen from './Views/Auth/LoginScreen';
import RegisterScreen from './Views/Auth/RegisterScreen';
import Home from './Views/Home';
import ShopCreation from './Views/ShopCreation';
import StoreDetail from './Views/StoreDetail';
import Cart from './Views/Cart';

// import ProductDetail from './Components/Product/ProductDetail'

function App() {
    const dispatch = useDispatch();

    const [, setChecking] = useState(true);
    const [, setIsLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                axios
                    .get(`http://localhost:3001/user/${user.uid}`)
                    .then((res) => {
                        return (
                            // console.log('SOY DATO',res.data)
                            // console.log('SOY CARTO',res.data[0].Cart)
                            res.data.length > 0 && res.data[0].Cart.map((el) => dispatch(setCart(el)))
                        );
                    })
                    .catch((err) => console.log(err));
                //     .then((res) => {
                //         return (
                //             res.data.length > 0 &&
                //             res.data[0]?.Cart?.map((element) => {
                //                 return { idProduct: element.idproduct, quantity: element.cantidad };
                //             })
                //         );
                //     })
                //     .then((res) => {
                //         let idProducts = res.map((el) => el.idProduct);
                //         let aux = {
                //             allIds: idProducts,
                //         };

                //         let temp = res.map((el) => el);

                //         axios.post('http://localhost:3001/product/cart', aux).then((res) => {
                //             res.data.length > 0 &&
                //                 res.data
                //                     .map((el) => {
                //                         let product = temp.find((element) => {
                //                             if (element.idProduct === el.id) {
                //                                 var quantityResult = element.quantity;
                //                             }

                //                             console.log(product);
                //                             return quantityResult;
                //                         });
                //                         return {
                //                             ...el,
                //                             quantity: product.quantity,
                //                         };
                //                     })
                //                     .map((productToCart) => dispatch(setCart(productToCart)));
                //         });
                //     });
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    useEffect(() => {
        dispatch(getStores());
        dispatch(getProductTypes());
    }, [dispatch]);

    return (
        <>
            <Switch>
                <Route path='/storePanel' component={StorePanel} />
                <Route path='/home' exact component={Home} />
                <Route path='/' exact component={Landing} />
                <Route path='/cart/:id' exact component={Cart} />
                <Route path='/create/shop' exact component={ShopCreation} />
                <Route path='/auth/login' exact component={LoginScreen} />
                <Route path='/auth/register' exact component={RegisterScreen} />
                <Route path='/home/store/:id' exact component={StoreDetail} />
            </Switch>
        </>
    );
}

export default App;
