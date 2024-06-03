import { Link, NavLink } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>SK</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center text-sm'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button aria-label='Search'>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <li className='hidden sm:inline'>
            <NavLink
              to='/'
              className='text-slate-700 hover:underline'
              activeClassName='underline'
            >
              Home
            </NavLink>
          </li>
          <li className='hidden sm:inline'>
            <NavLink
              to='/about'
              className='text-slate-700 hover:underline'
              activeClassName='underline'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile'
              className='text-slate-700 hover:underline'
              activeClassName='underline'
            >
              Sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
