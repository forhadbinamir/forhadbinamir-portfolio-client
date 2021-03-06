import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo-1.png'
const Navbar = () => {
    const navMenu = <>
        < Link className='mr-3 hover:text-orange-500 hover:border-b py-1' to='/home' > Home</Link>
        < Link className='mr-3 hover:text-orange-500 hover:border-b py-1' to='/about' > About</Link>
        < Link className='mr-3 hover:text-orange-500 hover:border-b py-1' to='/project' > Projects</Link>
        < Link className='mr-3 hover:text-orange-500 hover:border-b py-1' to='/contact' > Contact</Link>

    </>
    return (
        <div>
            <div className="navbar bg-slate-900 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='h-16' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://drive.google.com/file/d/1YsvaHpk2nE1NUpFv-sKc7OOsPpmYKC2A/view?usp=sharing' className="btn btn-outline text-white" target='_blank' >Get Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;