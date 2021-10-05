import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { startLogout } from '../Redux/actions/auth';

export default function MenuDropDown() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const userId = user.uid;
    const history = useHistory();

    function handleLogout(e) {
        e.preventDefault();
        dispatch(startLogout());
        history.push('/');
    }

    return (
        <div className='relative inline-block text-left'>
            

            <div className='absolute right-0 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {!userId ? (
                    <div className='px-1 py-1 '>
                        
                            <div>
                                <button onClick={() => history.push('/auth/login')}
                                    className={`${'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    <LoginIcon
                                        className='w-5 h-5 mr-2 pointer-events-none'
                                        aria-hidden='true'
                                    />
                                    Login
                                </button>
                            </div>
                        

                        
                          <div>
                              <button  onClick={() => history.push('/auth/register')}
                                  className={`${'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                  <SignUpIcon className='w-5 h-5 mr-2' aria-hidden='true' />
                                  Sign Up
                              </button>
                          </div>
                        
                    </div>
                ) : (
                    <>
                        <div className='px-1 py-1'>
                            <div>
                                <button
                                    className={`${'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    <UserIcon
                                        className='w-5 h-5 mr-2 pointer-events-none'
                                        aria-hidden='true'
                                    />
                                    {user.name}
                                </button>
                            </div>
                        </div>

                        <div className='px-1 py-1'>
                            <div>
                                <button
                                    className={`${'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    <WishListIcon className='w-5 h-5 mr-2' aria-hidden='true' />
                                    My Wishlist
                                </button>
                            </div>
                            <div>
                                <button
                                    className={`${'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    <MyShopIcon className='w-5 h-5 mr-2' aria-hidden='true' />
                                    My Shop
                                </button>
                            </div>
                        </div>

                        <div className='px-1 py-1'>
                            <div>
                                <button
                                    onClick={ handleLogout}
                                    className={`${'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    <LogOutIcon
                                        className='w-5 h-5 mr-2 text-violet-400'
                                        aria-hidden='true'
                                    />
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function LoginIcon(props) {
    return (
        // <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        //     <path d='M4 13V16H7L16 7L13 4L4 13Z' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
        // </svg>
        <svg
            {...props}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                stroke='#38A3A5'
                strokeWidth='2'
                d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
            ></path>
        </svg>
    );
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                stroke='#38A3A5'
                strokeWidth='2'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            ></path>
        </svg>
    );
}

function SignUpIcon(props) {
    return (
        <svg
            {...props}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                stroke='#38A3A5'
                strokeWidth='2'
                d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
            ></path>
        </svg>
    );
}

function WishListIcon(props) {
    return (
        <svg
            {...props}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                stroke='#38A3A5'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            ></path>
        </svg>
    );
}

function MyShopIcon(props) {
    return (
        <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M10 4H16V10' stroke='#38A3A5' strokeWidth='2' />
            <path d='M16 4L8 12' stroke='#38A3A5' strokeWidth='2' />
            <path d='M8 6H4V16H14V12' stroke='#38A3A5' strokeWidth='2' />
        </svg>
    );
}

function LogOutIcon(props) {
    return (
        <svg {...props} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                stroke='#38A3A5'
                strokeWidth='2'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            ></path>
        </svg>
    );
}