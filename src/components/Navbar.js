import {Link,useNavigate} from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import {useEffect, useState} from "react";
const Navbar = ({changDarkMode,isDarkMode}) => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('username');
        navigate('/');
    }
    useEffect(() => {
        document.body.style.backgroundColor =  isDarkMode ?  'black' : 'white';
    })
    return (
        <>
            <nav className={'flex w-full justify-between px-5 pt-4'}>
              <Link to="/" >
                  <h4 className={'text-4xl font-bold text-blue-900 uppercase'}>Todo App</h4>
              </Link>

                <DarkModeToggle
                    onChange={changDarkMode}
                    checked={isDarkMode}
                    size={80}
                />
                {
                    username ?
                        (
                            <div className={'flex items-center'}>
                                <p className={`${isDarkMode ? 'text-white' : ''} mr-2`}>{username}</p>
                                <button className={'bg-red-600 py-2 rounded px-4'} onClick={logout}>Logout</button>
                            </div>
                        )
                        :
                        (
                           <Link to = 'signup' >
                               <button className={'bg-white px-4 py-2 rounded'}>Sign Up</button>
                           </Link>
                        )
                }
            </nav>
        </>
    )
}

export default Navbar;