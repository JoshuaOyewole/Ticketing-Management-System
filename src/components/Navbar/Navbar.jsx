import { Link, NavLink} from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className='bg-white flex justify-between px-4 py-3 lg:px-14 xl:px-24 xl:py-3 '>
        {/* LOGO */}
        <div className="logo w-8 xl:w-12">
            <Link to={'/'}>
                <img src={Logo} alt="Logo" />
            </Link>
        </div>
        {/* NAV MENU */}
        <ul className=' hidden md:flex items-center justify-between lg:w-3/5 xl:w-2/5'>
            <li>
                <NavLink to={'#book'} className='lg:font-medium transition ease-in-out delay-300 hover:text-primary'>Book</NavLink>
            </li>
            <li>
                <NavLink className='lg:font-medium transition ease-in-out delay-300 hover:text-primary' to={'#explore'}>Explore</NavLink>
            </li>
            <li>
                <NavLink className='lg:font-medium transition ease-in-out delay-300 hover:text-primary' to={'#services'}>Services</NavLink>
            </li>
            <li>
                <NavLink className='lg:font-medium transition ease-in-out delay-300 hover:text-primary' to={'#about'}>About</NavLink>
            </li>
            <li>
                <NavLink className='lg:font-medium transition ease-in-out delay-300 hover:text-primary' to={'#login'}>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar