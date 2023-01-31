
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className='bg-white flex justify-between px-4 py-3 lg:px-14 xl:px-24 xl:py-3 '>
        {/* LOGO */}
        <div className="logo w-8 xl:w-12">
            <img src={Logo} alt="Logo" />
        </div>
        {/* NAV MENU */}
        <ul className=' hidden md:flex items-center justify-between lg:w-3/5 xl:w-2/5'>
            <li>
                <Link to={'./book'} className='lg:font-medium transition ease-in-out delay-300 hover:text-primary'>Book</Link>
            </li>
            <li>
                <Link className='lg:font-medium transition ease-in-out delay-300 hover:text-primary' to={'./explore'}>Explore</Link>
            </li>
            <li>
                <Link className='lg:font-medium transition ease-in-out delay-300 hover:text-primary' to={'./services'}>Services</Link>
            </li>
            <li>
                <Link className='lg:font-medium transition ease-in-out delay-300 hover:text-primary' to={'./about'}>About</Link>
            </li>
            <li>
                <Link className='lg:font-medium transition ease-in-out delay-300 hover:text-primary' to={'./login'}>Login</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar